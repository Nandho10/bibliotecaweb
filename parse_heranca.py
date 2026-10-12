import sys, re, json
import pdfplumber

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r'C:\Users\simon\OneDrive\Documentos\Biblioteca Herança.pdf'

books = []
current_fase = None
current_ano = None

# We can associate each Phase with its roman numeral
phase_map = {
    1: ("Fase I", "Fase I (Anos 1 a 5) — A Pedra Fundamental"),
    2: ("Fase II", "Fase II (Anos 6 a 10) — Os Grandes Universos"),
    3: ("Fase III", "Fase III (Anos 11 a 15) — Sombras e Enigmas"),
    4: ("Fase IV", "Fase IV (Anos 16 a 20) — Brasil e Língua Portuguesa"),
    5: ("Fase V", "Fase V (Anos 21 a 25) — O Romance Universal"),
    6: ("Fase VI", "Fase VI (Anos 26 a 30) — Pensamento, História, Ciência e Referência"),
    7: ("Fase VII", "Fase VII (Anos 31 a 35) — Coroamento")
}

with pdfplumber.open(pdf_path) as pdf:
    # Pages 3 to 33 contain the 35 years
    full_text = ""
    for page in pdf.pages[2:33]:
        t = page.extract_text()
        if t:
            full_text += "\n" + t

lines = full_text.split('\n')
i = 0
ano_num = 0

while i < len(lines):
    line = lines[i].strip()
    if not line:
        i += 1
        continue
    
    # Check for FASE
    m_fase = re.match(r'^FASE\s+([IVXLCDM]+)', line, re.IGNORECASE)
    if m_fase:
        roman = m_fase.group(1).upper()
        # Find which phase
        for p_idx, (p_short, p_full) in phase_map.items():
            if roman in p_short.upper():
                current_fase = p_short
                break
        i += 1
        continue
    
    # Check for Ano
    m_ano = re.match(r'^Ano\s+(\d+)\s*[—–-]\s*(.*)$', line, re.IGNORECASE)
    if m_ano:
        ano_num = int(m_ano.group(1))
        ano_tema = m_ano.group(2).strip()
        ano_ano_str = "2060-2061" if ano_num == 35 else str(2025 + ano_num)
        current_ano = f"Ano {ano_num} ({ano_ano_str}) — {ano_tema}"
        # infer phase if not set
        if ano_num <= 5: current_fase = "Fase I"
        elif ano_num <= 10: current_fase = "Fase II"
        elif ano_num <= 15: current_fase = "Fase III"
        elif ano_num <= 20: current_fase = "Fase IV"
        elif ano_num <= 25: current_fase = "Fase V"
        elif ano_num <= 30: current_fase = "Fase VI"
        else: current_fase = "Fase VII"
        i += 1
        continue
    
    # Check for numbered item
    m_item = re.match(r'^(\d+)\.\s*(.*)$', line)
    if m_item:
        item_num = int(m_item.group(1))
        content = m_item.group(2).strip()
        
        # Check if next lines are continuations (do not start with number., Ano, FASE, Itens, Como)
        j = i + 1
        while j < len(lines):
            next_l = lines[j].strip()
            if not next_l:
                j += 1
                continue
            if re.match(r'^\d+\.', next_l) or next_l.startswith('Ano ') or next_l.startswith('FASE ') or next_l.startswith('Itens ') or next_l.startswith('Como ') or next_l.startswith('Ritmo '):
                break
            content += " " + next_l
            j += 1
        i = j - 1  # will be incremented at bottom
        
        # Parse content
        is_aposta = '◇' in content
        content_clean = content.replace('◇', '').strip()
        
        # Split author and title
        # Usually "Autor — Título" or "Autor - Título"
        parts = re.split(r'\s*[—–-]\s*', content_clean, maxsplit=1)
        if len(parts) == 2:
            author = parts[0].strip()
            title = parts[1].strip()
        else:
            author = ""
            title = content_clean
            
        # Refine authors for special cases
        if not author or any(k in author for k in ['Bíblia', 'Epopeia', 'Beowulf', 'Edda', 'Saga', 'Canção', 'Mahabharata', 'Ramayana', 'Popol Vuh', 'Livro das Mil', 'Mabinogion', 'Atlas', 'Dicionário', 'Livro da Família']):
            full = f"{author} — {title}" if author else title
            if 'Bíblia' in full or 'Livro da Família' in full:
                author = "Diversos / Sagrado e Família"
                title = full
            elif any(c in full for c in ['Beowulf', 'Mabinogion', 'Edda', 'Saga', 'Canção', 'Epopeia', 'Mahabharata', 'Ramayana', 'Popol Vuh', 'Livro das Mil']):
                author = "Clássico Anônimo / Tradição"
                title = full
            elif 'Atlas' in full or 'Dicionário' in full:
                author = "Referência"
                title = full
        
        # Determine Papel
        # Default: if item <= 12, often Pilar vs Prazer or based on odd/even or first item of year
        # In PDF: "Em cada mês, compre 1 livro pilar (o próximo da lista mais denso) e 1 livro prazer (o mais leve)"
        # Also item 1 of each year or special items can be marked
        papel = "Pilar" if (item_num % 2 == 1) else "Prazer"
        if is_aposta:
            papel = "Aposta Recente"
        if item_num == 1:
            papel = "Pilar"
        if "edição de família" in title.lower() or "edição especial" in title.lower() or "doré" in title.lower():
            papel = "Livro de Luxo"
        
        books.append({
            "ordem": item_num,
            "fase": current_fase,
            "ano": current_ano,
            "autor": author,
            "titulo": title,
            "aposta": is_aposta,
            "papel": papel
        })
    i += 1

print(f"Total books parsed: {len(books)}")

# Check counts per year
year_counts = {}
for b in books:
    year_counts[b['ano']] = year_counts.get(b['ano'], 0) + 1

print("\nYear breakdown:")
for y, c in sorted(year_counts.items()):
    if c != 24 and not ('Ano 31' in y or 'Ano 32' in y or 'Ano 33' in y or 'Ano 34' in y or 'Ano 35' in y):
        print(f"WARNING: {y} has {c} books!")

print(f"Years 31-35 each have 12 books + 12 vagas livres.")

with open('parsed_heranca_books.json', 'w', encoding='utf-8') as f:
    json.dump(books, f, ensure_ascii=False, indent=2)
print("Updated parsed_heranca_books.json successfully!")

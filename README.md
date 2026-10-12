# 📚 Minha Biblioteca Web

Sistema moderno de gestão de acervo pessoal de livros, com interface web responsiva em tons pastel, sincronização em tempo real via Firebase Firestore, busca inteligente de metadados de livros por ISBN, leitor de código de barras pela câmera e suporte a aplicativo instalado (PWA).

---

## 🔑 Credenciais e Autenticação
- **Projeto Firebase:** `biblioteca-app-8c0a8`
- **E-mail de Administração:** `luizfernandho@gmail.com`
- **Provedor de Login:** Google Sign-In (Firebase Authentication)

---

## 🛡️ Regras de Segurança Recomendadas (Firestore Security Rules)
Para proteger o seu acervo no Firebase Console mantendo a visualização pública (ou restrita) e gravação exclusiva para sua conta:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permite leitura para qualquer visitante, mas escrita apenas para luizfernandho@gmail.com
    match /books/{bookId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'luizfernandho@gmail.com';
    }
    match /settings/{settingId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'luizfernandho@gmail.com';
    }
  }
}
```

---

## ✨ Funcionalidades Principais

### 1. 📱 Suporte a PWA (Aplicativo no Celular)
- Instale como app nativo no celular (Android e iOS) adicionando à tela de início.
- Funciona em tela cheia com ícones dedicados e Service Worker de carregamento instantâneo.

### 2. 📖 Ficha Catalográfica / Modal de Detalhes da Obra
- Clique em qualquer livro (card, capa ou tabela) para abrir a ficha completa da obra sem entrar no formulário de edição.
- Visualização de capa ampliada, sinopse, avaliação em estrelas, ficha técnica completa e notas de leitura.

### 3. 📝 Captura e Exibição de Sinopse
- As sinopses são extraídas automaticamente pelas APIs gratuitas ao informar o ISBN.
- Botão "Buscar sinopse online" na ficha do livro caso o livro não possua sinopse cadastrada.

### 4. 🎯 Desafio de Leitura Anual (Gamificação)
- Exibido no topo do painel de **Estatísticas**.
- Barra de progresso interativa da meta de livros lidos no ano e páginas acumuladas, com botão para ajustar a meta.

### 5. ⭐ Avaliação em Estrelas & Tier Lists
- Compatível com a classificação em tiers (*S, A, B, C, D, E*) e notas de 1 a 5 estrelas.
- Badges dourados nos cards e nova opção de ordenação por **"Melhor avaliados (⭐)"** e **"Ano de Leitura"**.

### 6. 🏷️ Filtro Rápido no Topo
- Botões de acesso imediato: **Todos**, **No Acervo (Adquiridos)**, **Desejos**, **Lendo**, **Lidos**.
- Permite isolar a lista de compras ou o acervo com um único toque.

### 7. 🔗 Links Diretos e Compartilhamento
- Botão "Compartilhar" na ficha de cada livro (`?book=ID`) para enviar recomendações para amigos ou abrir direto a obra.
- Opção "Compartilhar Link da Estante" no menu de Ações.

### 8. 📷 Leitor de Código de Barras e Persistência de Capas
- Leitor via câmera integrado para códigos EAN-13 / ISBN.
- Capas consultadas online são salvas automaticamente no Firestore, tornando o carregamento instantâneo.

### 9. 🤖 Central de Inteligência & Recomendações
- **Calculadora de Ritmo & Metas:** Pacing inteligente informando dias por livro, páginas/dia necessárias e projeção de fim de ano com base no ritmo real. Sugere leituras rápidas (<260p) do acervo para recuperar o ritmo.
- **Oráculo de Leitura ("O Que Ler Agora?"):** Matchmaker interativo que pontua livros não lidos do catálogo por afinidade de autor, notas de categoria e tempo disponível.
- **Radar de Próximas Compras & Desejos:** Conexão com Google Books que descobre obras famosas dos seus autores favoritos (Tier S/A) que você ainda não possui, com botão de adição em 1 clique para a Lista de Desejos e atalho para Amazon.
- **DNA Literário:** Mapeamento da categoria com maior nota média real vs maior volume, ranking dos autores nota 10 e estimativa de horas de leitura na fila.

---

## 💻 Como Rodar Localmente
1. Ative o ambiente virtual:
   ```powershell
   .\venv\Scripts\activate
   ```
2. Execute o servidor:
   ```powershell
   python app.py
   ```
3. Acesse `http://127.0.0.1:5000` no seu navegador.

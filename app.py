from flask import Flask, render_template, request, jsonify
import docx
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/upload-docx', methods=['POST'])
def upload_docx():
    if 'file' not in request.files:
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Arquivo vazio'}), 400
    
    if not file.filename.endswith('.docx'):
        return jsonify({'error': 'Formato inválido. Envie um arquivo .docx'}), 400

    try:
        doc = docx.Document(io.BytesIO(file.read()))
        
        books = []
        current_book = {}
        
        for table in doc.tables:
            for row in table.rows:
                cells = row.cells
                if len(cells) >= 2:
                    key = cells[0].text.strip()
                    val = cells[1].text.strip()
                    
                    if key and key.lower() not in ['campo', 'informação', 'informacao']:
                        if 'título' in key.lower() and current_book.get('Título'):
                            books.append(current_book)
                            current_book = {}
                        
                        current_book[key] = val
                        
        if current_book and current_book.get('Título'):
            books.append(current_book)
            
        return jsonify({'success': True, 'books': books})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

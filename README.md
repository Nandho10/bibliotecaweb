# 📚 Minha Biblioteca Web

Sistema moderno de gestão de acervo pessoal de livros, com interface web responsiva em tons pastel, sincronização em tempo real via Firebase Firestore, busca inteligente de metadados de livros por ISBN e leitor de código de barras pela câmera.

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

> **Nota:** Para ativar o login Google no Firebase Console:
> 1. Acesse o console do Firebase -> Projeto `biblioteca-app-8c0a8`.
> 2. Vá em **Authentication** -> aba **Sign-in method**.
> 3. Clique em **Google**, ative o provedor e salve.

---

## ✨ Funcionalidades Principais
1. **Leitor de Código de Barras pela Câmera:**
   - Ícone de câmera no campo de ISBN do modal de cadastro.
   - Detecta o código EAN-13 / ISBN em tempo real via vídeo e emite confirmação sonora/visual.
   - Dispara automaticamente a busca agregada de metadados.
2. **Preenchimento Automático Multi-API por ISBN:**
   - Consulta paralela nas bases gratuitas da **BrasilAPI (CBL)**, **Google Books API** e **OpenLibrary**.
   - Preenchimento de título, autores, tradutores, editora/selo, páginas, ano, gênero, formato e país.
3. **Persistência Inteligente de Capas:**
   - Capas obtidas via API são salvas automaticamente no documento do livro no Firestore, eliminando novas requisições e acelerando o carregamento da biblioteca.
4. **Design Pastel Suave e Cores por Categoria Temática:**
   - Paleta suave para cada Categoria Literária com contraste adaptativo em modo Claro e Escuro.
5. **Barra de Ações Compacta e Responsiva:**
   - Destaque no botão primário `+ Novo Livro` e agrupamento das ferramentas secundárias em menu suspenso `Ações` (Gerenciar Listas, Exportar CSV, Exportar PDF, Atualizar via CSV).
6. **Diferenciação Clara entre Situação do Acervo e Leitura:**
   - **Situação (Acervo):** `Adquirido` ou `Desejo`.
   - **Status de Leitura:** `Lido`, `Lendo`, `Aguardando`, `Não lido`, `Abandonado`.

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

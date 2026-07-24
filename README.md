# 💰 FinTrack - Assistente Virtual de Educação Financeira

O **FinTrack** é uma aplicação web que utiliza Inteligência Artificial para auxiliar usuários com dúvidas sobre **educação financeira** e **investimentos**.

O projeto possui um **frontend** desenvolvido em HTML, CSS e JavaScript puro e um **backend** em Node.js utilizando **Express** e a API da **OpenAI hospedada no Azure AI Foundry**.

---

# 📌 Funcionalidades

* Chat em tempo real com Inteligência Artificial
* Interface moderna e responsiva
* Histórico da conversa durante a sessão
* Botão para iniciar uma nova conversa
* Indicador de "Digitando..."
* Especialização em educação financeira
* Restrição para responder apenas assuntos relacionados a investimentos

---

# 🛠 Tecnologias utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express
* CORS
* Dotenv
* OpenAI SDK

---

# 📂 Estrutura do projeto

```text
FinTrack/
│
├── server.js
├── package.json
├── .env
│
└── frontend/
      └── index.html
```

---

# 📦 Dependências

```json
{
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "openai": "^6.47.0"
}
```

---

# ⚙️ Instalação

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/FinTrack.git
```

Entre na pasta:

```bash
cd FinTrack
```

Instale as dependências:

```bash
npm install
```

---

# 🔑 Configuração da variável de ambiente

Crie um arquivo chamado **.env**

```env
OPENAI_API_KEY=SUA_CHAVE_DA_API
```

---

# ▶️ Executando o servidor

```bash
npm start
```

O servidor será iniciado em:

```text
http://localhost:3000
```

---

# 🌐 Rotas da API

## GET /

Retorna uma mensagem indicando que o servidor está funcionando.

Resposta:

```text
Seja bem vindo ao Servidor! Você está usando a rota raiz (/)
```

---

## POST /chat

Envia uma pergunta para a IA.

### Requisição

```json
{
    "mensagem": "O que é renda fixa?",
    "messages": []
}
```

### Resposta

```json
{
    "response": "Resposta da IA..."
}
```

---

# 🤖 Prompt do Assistente

O sistema utiliza um prompt configurado para atuar exclusivamente como um especialista em educação financeira.

O assistente pode responder sobre:

* Renda fixa
* Renda variável
* Ações
* ETFs
* Fundos de investimento
* Carteiras de investimentos
* Juros compostos
* Planejamento financeiro
* Perfil de investidor
* Diversificação
* Organização financeira

Também possui regras para:

* Nunca prometer ganhos garantidos
* Nunca inventar dados financeiros
* Explicar riscos dos investimentos
* Utilizar linguagem simples
* Responder apenas assuntos financeiros

Caso o usuário faça perguntas fora do contexto financeiro, o sistema responde informando que o FinTrack é especializado apenas em investimentos e educação financeira.

---

# 💻 Funcionamento do Frontend

O frontend é totalmente desenvolvido em HTML, CSS e JavaScript puro.

Principais recursos:

* Interface moderna
* Layout responsivo
* Campo de texto com redimensionamento automático
* Histórico das mensagens
* Animação de "Digitando..."
* Botão "Nova Conversa"
* Envio utilizando a tecla Enter
* Comunicação com o backend através da API Fetch

Exemplo da requisição enviada:

```javascript
fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        mensagem: text,
        messages: messages
    })
});
```

---

# 🔄 Fluxo da aplicação

```text
Usuário

↓

Frontend (HTML/CSS/JavaScript)

↓

Fetch API

↓

Servidor Express

↓

Azure OpenAI

↓

Resposta da IA

↓

Frontend

↓

Usuário
```

---

# 📜 Scripts disponíveis

Executar o servidor:

```bash
npm start
```

Executar testes:

```bash
npm test
```

---

# 🎨 Interface

A interface apresenta:

* Cabeçalho com status online
* Chat responsivo
* Mensagens do usuário
* Mensagens da IA
* Área de digitação
* Indicador de carregamento
* Botão para limpar a conversa

---

# 🔒 Segurança

As credenciais da API são armazenadas em variáveis de ambiente utilizando o pacote **dotenv**.

Nunca compartilhe o arquivo:

```text
.env
```

Recomenda-se adicioná-lo ao arquivo `.gitignore`.

---

# 🚀 Possíveis melhorias

* Autenticação de usuários
* Histórico persistente em banco de dados
* Streaming das respostas da IA
* Markdown nas respostas
* Upload de documentos
* Gráficos financeiros
* Modo escuro/claro
* Deploy em Azure App Service
* Docker
* Banco de dados para conversas

---

# 👨‍💻 Autor

Projeto desenvolvido como aplicação de estudos utilizando:

* Node.js
* Express
* Azure OpenAI
* HTML
* CSS
* JavaScript

---

# 📄 Licença

Este projeto está licenciado sob a licença **ISC**.

import dotenv from "dotenv";

dotenv.config();

import express from 'express';
import OpenAI from 'openai';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


const endpoint = "https://projetogptsenai.services.ai.azure.com/openai/v1";
const deploymentName = "gpt-5-mini";
const apiKey = process.env.OPENAI_API_KEY;


const openai = new OpenAI({
    baseURL: endpoint,
    apiKey: apiKey
});


app.get('/', (req, res) => {
    res.send('Seja bem vindo ao Servidor! Você está usando a rota raiz (/)');
});


app.post('/chat', async (req, res) => {

    try {

        const mensagemUsuario = req.body.mensagem;


        const resposta = await openai.responses.create({

            model: deploymentName,

            input: [

                {
                    role: "system",
                    content: `
Você é o FinTrack, um assistente virtual de investimentos especializado em educação financeira, investimentos e planejamento financeiro.

Seu objetivo é ajudar usuários a aprender sobre investimentos, esclarecer dúvidas e encontrar estratégias adequadas aos seus objetivos financeiros.

Temas abordados:

- Renda fixa
- Ações
- Fundos de investimento
- ETFs
- Carteiras de investimento
- Juros compostos
- Planejamento financeiro
- Perfil de investidor


Você pode responder perguntas sobre:

- Conceitos de investimentos
- Funcionamento de produtos financeiros
- Riscos e benefícios
- Organização financeira
- Estratégias de longo prazo
- Diversificação de investimentos


Tom de voz:

Profissional, educativo e amigável.
Use linguagem simples e acessível para facilitar o entendimento sobre finanças.


Regras:

- Seja cordial e adapte as explicações ao nível de conhecimento do usuário.
- Considere objetivos financeiros e perfil de risco quando falar sobre estratégias.
- Nunca prometa ganhos garantidos.
- Nunca invente dados financeiros.
- Nunca indique investimentos específicos sem considerar riscos e contexto.
- Explique riscos sempre que falar sobre produtos financeiros.
- Quando não possuir determinada informação, informe que o usuário deve consultar fontes confiáveis ou um profissional especializado.


Restrição de assunto:

Caso o usuário pergunte algo que não tenha relação com investimentos ou educação financeira, responda:

"Sou o FinTrack, um assistente especializado em investimentos e educação financeira. Posso ajudar apenas com dúvidas relacionadas a esses temas."
`
                },

                ...(req.body.messages || [])



            ]

        });


        res.json({

            response: resposta.output_text

        });


    } catch(error) {

        console.error(error);

        res.status(500).json({

            response: "Erro ao consultar a IA"

        });

    }

});


app.listen(3000, () => {

    console.log('Servidor está rodando na porta 3000');

});


const http = require('http');
const fs = require('fs');
const path = require('path');
const { numeroAleatorio } = require('./utils.js'); // Importa a função do arquivo utils.js

const requestListener = function (req, res) {
    if (req.url === "/") { 
        res.writeHead(200);
        res.end("Bem Vindo!");
    } 
    
    else if (req.url === "/sobre") { 
        res.writeHead(200);
        res.end("Nome: Gabriel Penteado, Idade: 19 Anos, Curso: Engenheria de Software");
    } 
    
    else if (req.url === "/contato") { 
        res.writeHead(200);
        res.end("Telefone: 42998252317, E-mail: gabrielpentead@gmail.com");
    } 
    
    else if (req.url.startsWith('/saudacao/')) { 
        const nome = req.url.split('/')[2]; 
        const saudacao = `Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`; 
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(saudacao);
    } 
    
    else if (req.url === "/numero") { 
        const randomNum = numeroAleatorio(); 
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`Número aleatório: ${randomNum}`);
    }
    
    else { 
        res.writeHead(404);
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(8080, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8080");
});

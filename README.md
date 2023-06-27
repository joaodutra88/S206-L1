# S206-L1 (prova pratica)

![Repo Size](https://img.shields.io/github/repo-size/joaodutra88/S206-L1)
![Linguagens usadas](https://img.shields.io/github/languages/count/joaodutra88/S206-L1)
![Linguagem mais usada](https://img.shields.io/github/languages/top/joaodutra88/S206-L1)
![Última atualização](https://img.shields.io/github/last-commit/joaodutra88/S206-L1)

# Programa com Cypress e Mochawesome

Este é um programa que utiliza o Cypress para executar testes automatizados e o Mochawesome para gerar um relatório de testes.

## Requisitos

Para executar este programa, é necessário ter as seguintes dependências instaladas em seu computador:

-  Node.js
-  NPM ou Yarn

# Instalação

**Clone este repositório em sua máquina local:**

```
git clone https://github.com/joaodutra88/S206-L1
```

**Instale as dependências do projeto:**

```
npm install
```

# Como executar

-  Certifique-se de estar no diretório raiz do projeto.
-  Execute o seguinte comando para abrir a interface do Cypress:

```
./node_modules/.bin/cypress open
```

Isso abrirá a interface do Cypress.

-  Selecione o arquivo de teste que deseja executar na interface do Cypress.
-  Aguarde até que os testes sejam executados.

# Como gerar relatório com Mochawesome

-  Certifique-se de estar no diretório raiz do projeto.
-  Execute o seguinte comando para abrir a interface do Mochawesome:

```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

-  Espere executar todos os testes.
-  Após a conclusão dos testes, será criado um relatório HTML em reports/html.
-  Para visualizar todos os testes em html, abra o index.html localizado na pasta reports/html.

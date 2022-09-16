# Documentação API - Plathanus Challenge

Link para a documentação -> https://plathanus-challenge.herokuapp.com/api-docs/

### Tabela de Conteúdos

- [Documentação API - Plathanus Challenge](#documentação-api---plathanus-challenge)
    - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [1. Visão Geral](#1-visão-geral)
        - [Visão geral do projeto, um pouco das tecnologias usadas.](#visão-geral-do-projeto-um-pouco-das-tecnologias-usadas)
      - [A URL base da aplicação:](#a-url-base-da-aplicação)
  - [2. Início Rápido](#2-início-rápido)
    - [2.1. Instalando Dependências](#21-instalando-dependências)
    - [2.2. Variáveis de Ambiente](#22-variáveis-de-ambiente)
    - [2.3. Migrations](#23-migrations)
  - [4. Autenticação](#4-autenticação)

---

## 1. Visão Geral

##### Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://prisma.io/)

#### A URL base da aplicação:

https://plathanus-challenge.herokuapp.com/

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn prisma migrate dev
```

---

## 4. Autenticação

```
username:admin
password:admin
```

---


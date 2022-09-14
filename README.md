# Documentação API - Plathanus Challenge

### Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

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

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
  - [POST - /users](#11-criação-de-loja)
  - [GET - /users](#12-listando-lojas)
  - [DELETE - /users/:id](#16-deletar-loja-por-id)
- [Login ](#2-products)
  - [POST - /login](#17-efetuar-o-login-no-sistema-da-loja)
- [Rockets](#3-order)
  - [POST - /rockets](#31-criação-de-rockets)
  - [GET - /rockets](#32-listando-rocketss)
  - [GET - /rockets/:id](#33-listar-rockets-por-id)
  - [PATCH - /rockets/:id](#34-atualizar-rockets-por-id)
  - [DELETE - /rockets/:id](#35-deletar-rockets-por-id)
  - [GET - /rockets/pagination](#36-listar-order-por-status)

---

## 1. **Users**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Store é definido como:

| Campo    | Tipo   | Descrição                      |
| -------- | ------ | ------------------------------ |
| id       | string | Identificador único do usuário |
| username | string | Nome do usuário                |
| password | string | Senha de acesso                |

### Endpoints

| Método | Rota       | Descrição                                       |
| ------ | ---------- | ----------------------------------------------- |
| POST   | /users     | Criação de um usuário                           |
| GET    | /users     | Lista todos os usuários.                        |
| DELETE | /users/:id | Deleta um usuário, usando seu ID como parâmetro |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Corpo da Requisição:

```json
{
  "username": "admin",
  "password": "admin",
  "isAdm": true
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "eb509a06-173c-4f1a-bc83-546e276f66af",
  "username": "admin",
  "isAdm": true
}
```

### Possíveis Erros:

| Código do Erro | Descrição |
| -------------- | --------- |
| 409 Conflict   |

    message": "username already exists

|

---

### 1.2. **Listando usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "eb509a06-173c-4f1a-bc83-546e276f66af",
    "username": "admin",
    "isAdm": true
  }
]
```

### Possíveis Erros:

O usuário precisa estar logado no sistema

---

### 1.6. **Deletar usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| id        | string | Identificador único do usuário (Users) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

[ Voltar aos Endpoints ](#5-endpoints)

#

---

## 2. **Login**

[ Voltar para os Endpoints ](#5-endpoints)

### Endpoints

| Método | Rota   | Descrição        |
| ------ | ------ | ---------------- |
| POST   | /login | Login do usuário |

---

### Corpo da Requisição:

```json
{
  "branch": "11",
  "password": "123456"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2giOiIxMSIsImlhdCI6MTY1MzY2NDA4MywiZXhwIjoxNjUzNzUwNDgzfQ.O4Yfq8L1-ErB1WL1-vpZu7swfqS2QwziIOER4g69thg"
}
```

### Possíveis Erros:

Filial(branch) ou senha(password) incorretos

#

#

#

---

## 3. **Rockets**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Rockets é definido como:

| Campo       | Tipo   | Descrição                            |
| ----------- | ------ | ------------------------------------ |
| id          | string | Identificador único do rocket        |
| name        | string | nome identificador                   |
| description | string | Descrição                            |
| height      | Float  | Altura do rocket                     |
| diameter    | Float  | Diâmetro do rocket                   |
| mass        | Float  | Peso em kg                           |
| image       | string | Imagem do rocket                     |
| userId      | string | Identificador de quem criou o rocket |

### Endpoints

| Método | Rota                | Descrição                                               |
| ------ | ------------------- | ------------------------------------------------------- |
| POST   | /rockets            | Criação de um foguete.                                  |
| GET    | /rockets            | Lista todos os foguetes.                                |
| GET    | /rockets/:id        | Lista um foguete, usando seu ID como parâmetro          |
| GET    | /rockets/pagination | Lista foguetes em 2 em 2                                |
| PATCH  | /rockets/:id        | Atualiza dados do foguete, usando seu ID como parâmetro |
| DELETE | /rockets/:id        | Deleta um foguete, usando seu ID como parâmetro         |

---

### 3.1. **Criação de Rocket**

[ Voltar para os Endpoints ](#5-endpoints)

### `/rockets`

### Corpo da Requisição:

```json
{
  "name": "Falcon Heavy",
  "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
  "height": 118,
  "diameter": 12.7,
  "mass": 200000,
  "image": "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "ebffe46c-9ca6-47d0-80f5-a98ede235b41",
  "name": "Falcon Heavy",
  "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
  "height": 118,
  "diameter": 12.7,
  "mass": 200000,
  "image": "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg",
  "userId": "eb509a06-173c-4f1a-bc83-546e276f66af"
}
```

### Possíveis Erros:

Nenhum

---

### 3.2. **Listando rockets**

[ Voltar aos Endpoints ](#5-endpoints)

### `/rockets`

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "33f5e1b6-32c6-47e4-9cab-3645b64b4984",
    "name": "Falcon Heavy",
    "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    "height": 70,
    "diameter": 12.29,
    "mass": 200000,
    "image": "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg"
  },
  {
    "id": "81399eb1-5bdc-4eb8-92c3-0fa59399242f",
    "name": "Falcon 1",
    "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    "height": 70,
    "diameter": 3.7,
    "mass": 200000,
    "image": "https://imgur.com/DaCfMsj.jpg"
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 3.3. **Listar rocket por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/rockets/:id`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                     |
| --------- | ------ | ----------------------------- |
| id        | string | Identificador único (rockets) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "7d9b8152-c341-4009-9f7d-e24b844bd6f4",
  "name": "Falcon 9",
  "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
  "height": 70,
  "diameter": 12.7,
  "mass": 200000,
  "image": "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg"
}
```

### Possíveis Erros:

| Código do Erro | Descrição        |
| -------------- | ---------------- |
| 404 Not Found  | Rocket not found |

### 3.4. **Atualizar rocket por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/rockets/:id`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                     |
| --------- | ------ | ----------------------------- |
| id        | string | Identificador único (Rockets) |

### Corpo da Requisição:

```json
{
  "name": "Rocket 50"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "01d42f06-08f8-4461-bd01-1a0bbd4aae9e",
  "name": "Rocket 50",
  "description": "blabla ba",
  "height": 1.4,
  "diameter": 12.29,
  "mass": 20000,
  "image": "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
  "userId": "1e8be9bd-b023-4976-a0ba-ad6ccc4cb348"
}
```

### 3.5. **Deletar Rocket por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/rockets/:id`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                    |
| --------- | ------ | ---------------------------- |
| id        | string | Identificador único (Rocket) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
Vazio
```

### 3.6. **Listar Rocket por paginação**

[ Voltar aos Endpoints ](#5-endpoints)

### `/rockets/pagination`

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "33f5e1b6-32c6-47e4-9cab-3645b64b4984",
    "name": "Falcon Heavy",
    "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    "height": 70,
    "diameter": 12.29,
    "mass": 200000,
    "image": "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg"
  },
  {
    "id": "7d9b8152-c341-4009-9f7d-e24b844bd6f4",
    "name": "Falcon 9",
    "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
    "height": 70,
    "diameter": 12.7,
    "mass": 200000,
    "image": "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg"
  }
]
```

### Possíveis Erros:

Nenhum, apenas uma lista vazia caso não encontre nenhum rocket

#

#

#

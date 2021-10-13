<h1 align="center">Valoriza</h1>

## Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe e foi desenvolvida durante o evento NLW 06 da Rocketseat.

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

Recursos em destaque

- Modificação de atributos de objetos do TypeORM usando a lib "class-transformer"
- Adição de atributo custom à interface Express/Request incluindo @types local no typescript
- Encriptação de senhas usando a lib "bcryptjs"
- Geração de primary keys usando a lib "uuid"

## Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

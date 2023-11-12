## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

Introduction:

1.Create new Project

E:\graphqlcourse>nest new nestjs-tutorial

2.Create modules
2.1 Delete the content in the src folder except app.module.ts and main.ts
2.2 Execute the command (g for generate):
E:\graphqlcourse\nestjs-tutorial>nest g module user
2.3 Coding for controllers and services, refer to AuthController and AuthService

3.Set up database.
3.1 Install docker(window version)
3.2 Test docker
E:\graphqlcourse\nestjs-tutorial>docker ps
3.3 Configure in nestjs-tutorial, refer to docker-compose.yml
3.4 Then set up in command:
E:\graphqlcourse\nestjs-tutorial>docker compose up nestjs-tutorial -d

4.Introduced prisma framework
4.1.Install:
E:\graphqlcourse\nestjs-tutorial>yarn add -D prisma
E:\graphqlcourse\nestjs-tutorial>yarn add @prisma/client
4.2.Initialize Prisma
E:\graphqlcourse\nestjs-tutorial>npx prisma init

TroubleShooting:
1.If you get "delete ␍ eslintprettier/prettier" error, try:
E:\graphqlcourse\nestjs-tutorial>yarn run lint --fix

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

TroubleShooting:
1.If you get "delete ␍ eslintprettier/prettier" error, try:
E:\graphqlcourse\nestjs-tutorial>yarn run lint --fix

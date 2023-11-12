1.Start the database
E:\graphqlcourse\nestjs-tutorial>docker compose up nestjs-tutorial -d
2.Start app
E:\graphqlcourse>yarn start:dev
3.Start prisma client
E:\graphqlcourse\nestjs-tutorial>npx prisma studio

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
4.3. Install Prisma plugin in vscode studio for prompting syntax.
4.4. Edit the DATABASE_URL of .env file based on the configurations in the docker-compose.yml file.
DATABASE_URL="postgresql://postgres:123@localhost:5434/nest?schema=public"
4.5. Add modles in schema.prisma file.
4.6 Run the prisma to initialize tables defined in schema.prisma
E:\graphqlcourse\nestjs-tutorial>npx prisma migrate dev

4.7.Run the following command (this will generate type of data we defined in schema.prisma):
4.7.1 E:\graphqlcourse\nestjs-tutorial>npx prisma generate
4.7.2 The structure looks like the following (don't need to define in the project anymore):
type User = {
id: number;
createAt: Date;
updateAt: Date;
email: string;
hash: string;
firstName: string;
lastName: string;
}

4.8 We can directly use it in our code now, refer to auth.service.ts

4.9 We can use the following command to access the postgres database now.
E:\graphqlcourse\nestjs-tutorial>npx prisma studio

5.Create module prisma (Here we use nest g module prisma, we can use other names like prismatest,etc, we already have done it manually before, just list the command for instruction)
E:\graphqlcourse\nestjs-tutorial>nest g module prisma

6.Also create service prisma used for connecting to database
E:\graphqlcourse\nestjs-tutorial>nest g service prisma --no-spec

7. Add class validator to verify request parameters
   E:\graphqlcourse\nestjs-tutorial> yarn add class-validator class-transformer

8. Install argon2 to generate encrypted password
   E:\graphqlcourse\nestjs-tutorial> yarn add argon2

TroubleShooting:
1.If you get "delete ␍ eslintprettier/prettier" error, try:
E:\graphqlcourse\nestjs-tutorial>yarn run lint --fix
2.Meet error when installing class-validator class-transformer in setp 7. The problem is probably the version.
Change ts-loader version in package.json.
3.If modify the schema.prisma, but it doesn't work
3.1 Try to stop the container in docker. Then run the app again.
E:\graphqlcourse\nestjs-tutorial> yarn start:dev
3.2 if still not work, try to delete the migrations and run the following command:
npx prisma migrate dev.
3.3 Run the app again.
E:\graphqlcourse\nestjs-tutorial>docker compose up nestjs-tutorial -d
```

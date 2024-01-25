Simple api for [e-commerce](https://e-commerce-git-dev-abi-nfs-projects.vercel.app/) web.

## Usage:
 
 - Use your local environment defined in: ``` src/app.module.ts ``` or use a simple .env file to define
 your local secret variable environment.

 - To run locally add this following line in TypeOrmModule.forRoot
 ```
      host: process.env.DATABASE_URL,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
 ```
 
 - An examole of .env file is define in ``` .env.txt ``` and just remove the .txt extension
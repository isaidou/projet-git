#  Next Boilerplate

## Linter

We are using ESlint with airbnb code style configuration.
You can install the *[Eslint VScode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)* and enable auto format in the settings.

## Available commands

* `npm run dev`: start app in dev mode on `localhost:3092`
* `npm run build`: build the app
* `npm run lint`: will use eslint to see if the code is linted
* `npm run test`: will run your tests
* `npm run test:coverage`: will run your tests and display coverage for each files
* `npm run test:debug`: will run your tests in debug mode and detect open handles

## Environment file

Need a `.env.local` and `.env.test` environment file like below:
``` 
NEXT_PUBLIC_BASE_URL=http://localhost:3092
DB_DATABASE_IRIS=iris
DB_USER_IRIS=<dbuser>
DB_PASSWORD_IRIS=<dbpass>
DB_HOST_IRIS=127.0.0.1
DB_PORT_IRIS=3306
JWT_KEY=johndoe

```
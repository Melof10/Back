# Server Base - Conexa


## Envinroment setup

1) Create database 
``` mysql
CREATE DATABASE conexa
```

2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Run test
``` bash
npm test
```
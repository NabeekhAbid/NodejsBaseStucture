# Node-Sequelize

Nodejs (express server) with sequelize as ORM and postgres as database. RabitMQ is used to mimic microservices. where as sendgrid is used as mailer. This project gives the basic stucture of application with user CRUD & Signup forgotpassword and login session managment API's.


## Tech stack:
Back-end - Node.js (^10.13.0) 
Package manager - npm (^6.1.4) 
Sequelize 
RabitMQ
sendgrid (as mailer)
aws s3 bucket
fs 
jsonwebtokens

### Prerequisites

1. ```NodeJS```
2. ```NPM```
3. ```RabitMQ a microService mesaging protocol install it if want to use Micro service acrhitechture https://www.vultr.com/docs/how-to-install-rabbitmq-on-ubuntu-16-04-47```  
4. ```postgresql```

### Installing

1. Clone the project.
2. cd node-Sequelize
3. Run ```npm install```  to install node dependencies.
4. In the same terminal/command window, set an environment ```"DEBUG=*" ``` (If you want debugging on)
5. Add data base credentials to server/config/config.json (You can take config.example as reference)
6. Add fill up .env 
7. Run migration ```sequelize db:migrate```
8. Run  ```npm start```  to start dev server.
9. listen to port 8001.

### Linting

1. Run ```npm run lint``` to lint app , server/ , bin/.

## Authors

* **NabeekhAbid** - *Initial work* - nabeekh@gmail.com
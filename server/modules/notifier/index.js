/*
*
*  notifier index.js
*
*  Index all the notifiers here.
*
*   @Nabeekh nabeekh@gmail.com
*
**/


const notiferIoc = {}

notiferIoc.EmailNotificationService = require('./emailNotification.service')()
module.exports = notiferIoc
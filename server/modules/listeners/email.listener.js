/*
*
*  emailListener.js
*
*  All email listeners are listed here.
*
*   @Nabeekh nabeekh@gmail.com
*
**/



const { EmailNotificationService} = require('../notifier');
const consumer = require('./consumer.js')

consumer('MAIL_NEW_ACCOUNT', EmailNotificationService.create);
consumer('RESET_PASSWORD_REQUEST', EmailNotificationService.create);



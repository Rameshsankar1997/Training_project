var admin = require("firebase-admin");

var serviceAccount = require("../nodification-cf95d-firebase-adminsdk-2kw5w-20e9bb9f24");

admin.initializeApp({
  	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://prismappfcm.firebaseio.com"
});
var topic = 'general';

var message = {
  notification: {
    title: 'Message from node',
    body: 'hey there'
  },
  topic: topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
});
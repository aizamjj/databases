var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      var message = {
        username: App.username,
        text,
        roomname: RoomsView.$select.val() || 'lobby' // Replace this later with user selected roomname
      };

      // Clear the form input and insert new message dynamically to the top chatroom
      FormView.$message.val('');
      var addedMessage = MessageView.render(message);
      MessagesView.$chats.prepend(addedMessage);

      Parse.create(message, result => {
        console.log('successfully saved my message');
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


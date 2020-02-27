var Messages = {

  room: null,

  store: function (text) {
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
  },

  renderInitialMsg: function (data) {
    var messages = Messages.getUsernameAndText(data);

    MessagesView.render(messages);
  },

  getUsernameAndText: function(data) {
    var {results} = data;
    var messages = results.reduce(function(accumulator, currentVal) {
      var {username, text} = currentVal;
      if (username && text) {
        accumulator.push({
          username,
          text
        });
      }

      return accumulator;
    }, []);

    return messages;
  },

  fetchMsgsWithInterval: function(roomname) {

    Messages.room = setInterval(() => {
      Parse.fetchWithInterval(roomname, function(results) {
        console.log(results);
        var msgs = Messages.getUsernameAndText(results);
        MessagesView.render(msgs, false);
      });
    }, 2000);
  }
};
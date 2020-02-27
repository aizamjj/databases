var Rooms = {

  addRoom: function(roomname) {
    // create object to pass into the create method so we can save to database
    var message = {username: '', text: '', roomname};
    // clear the messageView
    MessagesView.render([]);
    // call messageview with input message
    // MessageView()
    // call parse.create
    Parse.create(message, function(success) {
      console.log(success);
    });

    RoomsView.addNewRoomOption(roomname);
  },

  // manipulate the data to only have unique room

  // save the unique room to the roomsview

  createOptions: function(data) {
    // condense to unique room
    const { results } = data;
    let options = results.reduce((accumulator, currentValue) => {
      let { roomname } = currentValue;

      if (!accumulator.includes(roomname)) {
        roomname ? accumulator.push(roomname) : '';
      }

      return accumulator;
    }, []);
    RoomsView.renderOptions(options);
  },

  retrieveRoomMessages: function(roomName) {
    Parse.fetch(roomName, function(results) {
      var msgs = Messages.getUsernameAndText(results);

      MessagesView.render(msgs);

    });

  }

};


var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // attach an event to jQuery node so that when we click on it it will prompt the user for new room
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleChangeRoom);
  },

  render: function() {
  },

  handleAddRoom: function() {
    //create a variable called userPrompt and assign to prompt function
    var newRoom = prompt('Name of the room?');

    //check if undefined then don't run function
    if (newRoom) {
      //call rooms and pass in userPrompt
      Rooms.addRoom(newRoom);
    }
  },

  renderOptions: function(options) {
    // create an Empty option
    RoomsView.$select.append($('<option>', {}));

    // create tag options so that select can render each option
    $.each(options, function (index, item) {
      RoomsView.$select.append($('<option>', {
        value: item,
        text: item
      }));
    });
  },

  handleChangeRoom: function() {
    var roomName = RoomsView.$select.val();
    // select all messages that are in the same room
    Rooms.retrieveRoomMessages(roomName);

    // Clear the interval with the new room
    clearInterval(Messages.room);

    // run the interval for fecthing messages
    Messages.fetchMsgsWithInterval(roomName);

  },

  addNewRoomOption: function(room) {
    RoomsView.$select.append($('<option>', {
      value: room,
      text: room
    }).prop('selected', true));
  }

};

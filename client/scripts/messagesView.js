var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //input: no input
    //output:

  },

  render: function(messages, clear) {
    var html = '';
    // clear the Chat Room
    if (!clear) {
      MessagesView.$chats.empty();
    }

    messages.forEach(element => {
      html += MessageView.render(element);
    });

    MessagesView.$chats.append(html);
  }
};
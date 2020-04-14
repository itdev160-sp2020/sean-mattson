var messages = []; 

// this reminds me of key/value pairs in a hashmap in java 
var messageType = {
    out: 'out-message',
    in: 'in-message', 
    unknown: 'unknown-message'
};

// optional data to begin with (seed data)
var seedData = [
    { 
        type: messageType.out,
        user: 'Fred',
        message: 'Whats up with you today?' 
    },
    { 
        type: messageType.in,
        user: 'George',
        message: 'Nothing, why do you care?' 
    },
    { 
        type: messageType.out,
        user: 'Fred',
        message: 'Sheesh, was just asking if everything was ok. You seemed sad at this mornings meeting is all.' 
    },
];

function Message (type, user, message)
{
    this.type = type; 
    this.user = user; 
    this.message = message;
}

// creates and returns an element for the given message
function createMessageElement(message)
{
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event)
{
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    switch(event.target.id)
    {
        case 'send-button':
            user = 'Fred';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'George';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    // create new message
    if(messageInput.value != '')
    {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create message element
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function loadSeedData() 
{
    for (var i = 0; i<seedData.length; i++)
    {
        var message = new Message(seedData[i].type, seedData[i].user, seedData[i].message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for(var i = 0; i<messages.length; i++)
    {
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

    var init = function()
    {
        document.getElementById('send-button').onclick = addMessageHandler;
        document.getElementById('reply-button').onclick = addMessageHandler;

        loadSeedData();
    };

init();


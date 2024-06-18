const MessageType = Object.freeze({
	SENT: 'sent',
	RECEIVED: 'received'
});

const Author = Object.freeze({
	ME: 'Me',
	MONET: 'Monet',
});

const ChatType = Object.freeze({
	GROUP: 'group',
	MONET: 'monet',
});

export {MessageType, Author, ChatType};
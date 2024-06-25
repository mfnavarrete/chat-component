import {Author, MessageType} from './constants.js';

export const mockAvatarMonet = 'https://unavatar.io/github/37t?fallback=https://source.boringavatars.com/marble/120/1337_user?colors=264653r,2a9d8f,e9c46a,f4a261,e76f51';
export const mockAvatarUnknown = 'https://unavatar.io/unknown';
export const mockAvatarMe = 'https://unavatar.io/me';

export const mockGroupChatMessages = [
  {
    id: '1',
    author: 'Ashley Smith',
    time: '8:35 AM',
    text: 'Hey team, I’ve started drafting up the quote for our client. We need to make sure we cover all the necessary items and offer competitive pricing.',
    type: MessageType.RECEIVED,
    avatar: mockAvatarUnknown
  },
  {
    id: '2',
    author: 'Me',
    time: '8:35 AM',
    text: 'Sounds good, Ashley. What items are we including in the quote?',
    type: MessageType.SENT,
    avatar: mockAvatarMe
  },
  {
    id: '3',
    author: Author.ME,
    time: '8:35 AM',
    text: 'Hi everyone! I think we should definitely include a range of smartphones since our client was interested in upgrading their mobile devices.',
    type: MessageType.SENT,
    avatar: mockAvatarMe
  },
  {
    id: '4',
    author: Author.ME,
    time: '10:45 AM',
    text: 'Sure, let me take a look at our inventory. How...',
    type: MessageType.SENT,
    avatar: mockAvatarMe
  },
  {
    id: '5',
    author: 'Ashley Smith',
    time: '8:35 AM',
    text: 'Hey team, I’ve started drafting up the quote for our client. We need to make sure we cover all the necessary items and offer competitive pricing.',
    type: MessageType.RECEIVED,
    avatar: mockAvatarUnknown
  },
  {
    id: '6',
    author: 'Ashley Smith',
    time: '8:35 AM',
    text: 'Hey team, I’ve started drafting up the quote for our client. We need to make sure we cover all the necessary items and offer competitive pricing.',
    type: MessageType.RECEIVED,
    avatar: mockAvatarUnknown
  }
];

export const mockMonetChatMessages = [
  {
    id: '1',
    author: Author.ME,
    time: '8:35 AM',
    text: 'Hey Monet, why is the sky blue?',
    type: MessageType.SENT,
    avatar: mockAvatarMe
  },
  {
    id: '2',
    author: Author.MONET,
    time: '8:35 AM',
    text: 'The sky is blue because of the way the atmosphere interacts with sunlight.',
    type: MessageType.RECEIVED,
    avatar: mockAvatarMonet
  },
  {
    id: '3',
    author: Author.MONET,
    time: '8:35 AM',
    text: 'Sunlight reaches Earth\'s atmosphere and is scattered in all directions by all the gases and particles in the air. Blue light is scattered more than the other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.',
    type: MessageType.RECEIVED,
    avatar: mockAvatarMonet
  }
];

export const mockParticipants = [
  { avatar: `https://unavatar.io/1`, name: 'Emily Nguyen', status: 'online' },
  { avatar: `https://unavatar.io/2`, name: 'Abby Barret', status: 'offline' },
  { avatar: `https://unavatar.io/3`, name: 'Michael Johnson', status: 'online' },
  { avatar: `https://unavatar.io/4`, name: 'Sophia Lee', status: 'offline' },
  { avatar: `https://unavatar.io/5`, name: 'David Smith', status: 'online' },
  { avatar: `https://unavatar.io/6`, name: 'Olivia Brown', status: 'offline' },
  { avatar: `https://unavatar.io/7`, name: 'James Williams', status: 'online' },
  { avatar: `https://unavatar.io/8`, name: 'Isabella Davis', status: 'offline' },
  { avatar: `https://unavatar.io/9`, name: 'Lucas Martinez', status: 'online' },
  { avatar: `https://unavatar.io/0`, name: 'Ava Wilson', status: 'offline' },
];



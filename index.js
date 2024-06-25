import React, { lazy, Suspense } from 'react';
import { Author, ChatType, MessageType } from './src/constants/constants';
import { mockAvatarMe, mockAvatarMonet, mockAvatarUnknown, mockGroupChatMessages, mockMonetChatMessages, mockParticipants } from './src/constants/mockData';

import '@fortawesome/fontawesome-free/css/all.min.css';

const ChatApp = lazy(() => import('./src/components/ChatApp/ChatApp'));

export {
  ChatApp,
  Author,
  ChatType,
  MessageType,
  mockAvatarMe,
  mockAvatarMonet,
  mockAvatarUnknown,
  mockGroupChatMessages,
  mockMonetChatMessages,
  mockParticipants,
};

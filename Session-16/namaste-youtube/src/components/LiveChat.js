import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    // API Polling
    const i = setInterval(() => {
      console.log('API Polling');

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        }),
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
      {chatMessages.map((chatMessage, index) => (
        <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message} />
      ))}
    </div>
  );
};

export default LiveChat;

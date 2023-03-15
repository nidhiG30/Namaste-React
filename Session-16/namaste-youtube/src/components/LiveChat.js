import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  useEffect(() => {

    // API Polling
    const i = setInterval(() => {
      console.log('API Polling');
    }, 2000)

    return () => clearInterval(i);
  }, []);

  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
      <ChatMessage
        name='Nidhi Gadge'
        message='This is Namaste React Live! 🙏'
      />
    </div>
  );
};

export default LiveChat;

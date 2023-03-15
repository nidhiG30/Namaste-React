import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    // API Polling
    const i = setInterval(() => {
      console.log('API Polling');

      dispatch(addMessage({
        name: 'Nidhi Gadge',
        message: "Lorem Ipsum Dolor Site Amet 🚀"
      }))
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

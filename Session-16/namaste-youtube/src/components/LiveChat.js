import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');

  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    // API Polling
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + '🚀',
        }),
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        className='w-full p-2 ml-2 border border-black'
        onSubmit={e => {
          e.preventDefault();
          // console.log('On form submit', liveMessage);
          dispatch(
            addMessage({
              name: 'Nidhi Gadge',
              message: liveMessage,
            }),
          );
          setLiveMessage('');
        }}
      >
        <input
          className='border border-blue-600 w-5/6 px-2'
          type='text'
          value={liveMessage}
          onChange={e => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className='px-2 mx-4 bg-green-100'>Send</button>
      </form>
    </>
  );
};

export default LiveChat;

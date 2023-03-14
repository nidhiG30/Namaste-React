import React from 'react';
import Comment from './Comment';

const commentsData = [
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [
      {
        name: 'Nidhi Gadge',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        replies: [],
      },
    ],
  },
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [
      {
        name: 'Nidhi Gadge',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        replies: [
          {
            name: 'Nidhi Gadge',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            replies: [
              {
                name: 'Nidhi Gadge',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Nidhi Gadge',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        replies: [
          {
            name: 'Nidhi Gadge',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [],
  },
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />

      {/* Replies = List of comments */}
      <div className='pl-5 border border-l-black ml-5'>
        {/* <Comment key={index} data={comment} />
        <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> */}
        {/* Instead of following above pattern, used the same component within itself hence implementing Recursion. */}
        <CommentsList comments={comment.replies} /> {/* Here we can pass-in replies */}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

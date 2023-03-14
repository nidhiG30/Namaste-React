import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />

      {/* Replies = List of comments */}
      <div className='pl-5 border border-l-black ml-5'>
        <Comment key={index} data={comment} />
        <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> 
      </div>
    </div>
  ));
};

export default CommentsList;
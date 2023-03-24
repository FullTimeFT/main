import { useState } from 'react';

const CommentBox = () =>{
  
  const [comment, setComment] = useState("");
  const [showCommentBox, setShowcCommentBox] = useState(true);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(comment);
    setComment('')
  };
  

  const handleCancel = () => {
    setShowcCommentBox(false);
  }
  
  return(
      <div className={`comment-box ${showCommentBox ? "flex" : "hidden"} flex-col p-10 bg-gray-700`}>
          <form onSubmit={handleSubmit}>
            <textarea className = "w-full h-24 p-2 mb-2 border rounded bg-gray-500"
                      placeHolder="Add a comment.."
                      value = {comment}
                      onChange={(event) => setComment(event.target.value)} />
            
            <div className = "flex justify-end space-x-2">
              <button type="submit"
                      className = "px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">
                        Post
              </button>

              <button type = "button"
                      className = "px-4 py-2 font-semibold text-blue-500  bg-white border rounded hover:bg-blue-500 hover:text-white"
                      onClick={handleCancel}>
                    Cancel
              </button>
            </div>
          </form>
      </div>  
  );
};

export default CommentBox;
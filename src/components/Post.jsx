import Avatar from "./Avatar";
import CommentBox from "./CommentBox";
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Post = (props) => {
  console.log(props);
  const { postUploaderName, postUploaderID, postContent, proPicture } = props;
  
  const [LikeCount, setLikeCount] = useState(0); // state function for the like
  const [isToggleComment, setToggleComment] = useState(false); // state function for the comment
  
  const handleLikeClick = () => {
    setLikeCount(LikeCount + 1);
  };

  console.log(LikeCount);
  
  useEffect(() => {
    return () => {
      // cleanup function
    };
  });

  /*
  Thing to do for 3/21/2023: 
  Also, when I click the comment sign, a new pop-op should come. When I click share, 
  another pop-op should come saying share with facebook, instangram etc.
  
  */
  return (  
    <div className="w-full border-gray-600 overflow-hidden animate-fade-in-down">
      <div className="p-4 flex items-center bg-black rounded-t-lg">
        <Avatar uploader={{ name: postUploaderName, id: postUploaderID }} proPictureLink = {proPicture} />
      </div>


      <div className="bg-black px-4 py-2">
        <p className="bg-gray-900 border rounded-lg border-gray-600 text-white relative z-10">{postContent}</p>
        <div className="absolute inset-0opacity-25"></div>
      </div>

      <div className="bg-black flex flex-row justify-between rounded-b-lg p-4"> 
        <div className="flex items-center">
          <button className = "hover:to-blue-600"
                  onClick={handleLikeClick}>
            <AiOutlineLike className="text-white hover:text-blue-500 transition-colors duration-300" />
          </button>

          <div className="text-xs text-white ml-2">{LikeCount}</div>
        </div>

        <div className="flex items-center">
          <button onClick ={() => setToggleComment(!isToggleComment)} className="mr-4">
            <FaRegComment className="text-white hover:text-blue-500 transition-colors duration-300" />
          </button>

          <button>
            <FiShare className="text-white hover:text-blue-500 transition-colors duration-300" />
          </button>
        </div>
      </div>

      {isToggleComment && <CommentBox />}
    </div>
  );
};

export default Post;
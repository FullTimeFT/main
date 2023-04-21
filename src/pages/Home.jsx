import Post from "../components/Post";

const Home = ({ contentDetail }) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col space-y-4">
      {contentDetail.map((post, index) => (

        <Post
          key={index}
          postUploaderName={post.postUploaderName}
          postUploaderID={post.postUploaderID}
          postContent={post.content}
          proPicture={post.profilePicture}
        />
      ))}
    </div>
  );
};

export default Home;

import Post from "../components/Post";

const Home = (props) => {
  const postUploaderName1 = "Erik TenHag";
  const postUploaderID1 = "@erik_t_hag";
  const content1 =
    "It finally feels great to win against my former Boss, Pep Guardiola at the Slaughter House! ";
  const proPicture1 =
    "https://resources.premierleague.com/premierleague/photos/players/250x250/man41668.png";

  const postUploaderName2 = "Jurgen Klopp";
  const postUploaderID2 = "@klopp_jg";
  const content2 =
    "Can't believe Sancho scored against me? Van Djik needs to be sent to the mountains now";
  const proPicture2 =
    "https://upload.wikimedia.org/wikipedia/commons/8/81/J%C3%BCrgen_Klopp%2C_Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg";

  const postUploaderName3 = "Pep Guardiola";
  const postUploaderID3 = "@guardiola_p";
  const content3 =
    "Becoming the greatest manager of all time is my biggest dream";
  const proPicture3 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pep_2017_%28cropped%29.jpg/330px-Pep_2017_%28cropped%29.jpg";

  const postUploaderName4 = "Carlo Ancelotti";
  const postUploaderID4 = "@ance_c";
  const content4 = "I'm not letting Man City go away with UCL, trust me people";
  const proPicture4 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg";

  const postUploaderName5 = "Antonio Conte";
  const postUploaderID5 = "@conte_a";
  const content5 = "So sorry people, I'll have to leave EPL now. ";
  const proPicture5 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/20150616_Antonio_Conte.jpg/1200px-20150616_Antonio_Conte.jpg";

  const postUploaderName6 = "Thomas Tuchel";
  const postUploaderID6 = "@tuchel_t";
  const content6 = "Ayurveda in India is doing me an amazing job.  ";
  const proPicture6 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93175.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93175.jpg";

  return (
    <div className="max-w-4xl mx-auto flex flex-col space-y-4;">
      <Post
        postUploaderName={postUploaderName1}
        postUploaderID={postUploaderID1}
        postContent={content1}
        proPicture={proPicture1}
      />

      <Post
        postUploaderName={postUploaderName2}
        postUploaderID={postUploaderID2}
        postContent={content2}
        proPicture={proPicture2}
      />

      <Post
        postUploaderName={postUploaderName3}
        postUploaderID={postUploaderID3}
        postContent={content3}
        proPicture={proPicture3}
      />

      <Post
        postUploaderName={postUploaderName4}
        postUploaderID={postUploaderID4}
        postContent={content4}
        proPicture={proPicture4}
      />

      <Post
        postUploaderName={postUploaderName5}
        postUploaderID={postUploaderID5}
        postContent={content5}
        proPicture={proPicture5}
      />

      <Post
        postUploaderName={postUploaderName6}
        postUploaderID={postUploaderID6}
        postContent={content6}
        proPicture={proPicture6}
      />
    </div>
  );
};

export default Home;

const Avatar = (props) =>
{

    const { name, id } = props.uploader;
    const { proPictureLink } = props;
    return (
       <div className = "flex items-center">
            <div className="mr-4 rounded-lg border-gray-600 border-2 left-0 w-12 h-14">
                 <img src = { proPictureLink } alt="profile-pic used for posts" className = "w-full h-full object-cover"></img>
            </div>

            <div>
            <p className="text-white font-semibold">{name}</p>
            <p className="text-gray-300 text-xs">{id}</p>
            </div>
       </div>

    );
}



export default Avatar;


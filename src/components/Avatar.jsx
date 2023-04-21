const Avatar = (props) => {
     const { name, id } = props.uploader;
     const { proPictureLink } = props;
     return (
       <div className="flex items-center">
         <div className="mr-4">
           <img
             src={proPictureLink}
             alt="profile-pic used for posts"
             className="rounded-lg border-2 border-gray-600 w-12 h-12 object-cover"
           />
         </div>
         <div>
           <p className="text-white font-semibold text-lg">{name}</p>
           <p className="text-gray-300 text-xs">{id}</p>
         </div>
       </div>
     );
   };
   
   export default Avatar;
   
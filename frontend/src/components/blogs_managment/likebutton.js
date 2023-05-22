import React, { useState } from 'react';
import "../../styles/likebutton.css";

function LikeButton() {

const [likes, setLikes] = useState(0);
const [liked, setLiked] = useState(false);

const handleLikeClick = () => {

if (liked) {
setLikes(likes - 1);
setLiked(false);

} else {
setLikes(likes + 1);
setLiked(true);

}
};

return (

<div className="like-button-container">
<button
 className={`like-button ${liked ? 'liked' : ''}`}
 onClick={handleLikeClick}
>
 {likes} Likes
</button>
 </div>
);
}
export default LikeButton;
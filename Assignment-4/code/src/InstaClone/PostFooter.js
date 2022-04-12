const PostFooter = ({config}) =>{
    const postedOnDate = new Date(config.date),
    postedOn = `${postedOnDate.getDate()}-${postedOnDate.getMonth()}-${postedOnDate.getFullYear()}`;

    return (
    <div className="PostFooter">
        <div className="PostDetails">
            <div className="LikesShareWrapper">
                <div className="LikeShareContainer">
                    <div className="LikeIcon"><img src="./Heart.png" alt="heart img"/></div>
                    <div className="ShareIcon"><img src="./share.png" alt="heart img"/></div>
                    <div className="PostedOn">{postedOn}</div>

                </div>
                {/* <div className="PostedOn">{postedOn}</div> */}
            </div>
            <div className="likeCount">
                <div className="Likes">{config.likes}</div>
            </div>
        </div>
        <div className="PostCaption">{config.description}</div>
    </div>
    );
};

// const MonthName = ["jan","feb","march","april","may","june","july","aug","sept","oct","nov","dec"];

export default PostFooter;
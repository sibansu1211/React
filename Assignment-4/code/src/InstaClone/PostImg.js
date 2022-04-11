const PostImg = ({config}) =>{
    const ImgUrl = `../Images/${config.PostImage}`;

    return <div className="PostImageWrapper">
        <img src={ImgUrl} alt={config.description}/>
    </div>
}
export default PostImg;
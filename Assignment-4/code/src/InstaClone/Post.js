import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostImg from "./PostImg";
// import Header from "./Header";

// layout
const Post = ({ config }) =>{
    return (
    <div className="PostContainer">
        {/* <Header config={config}/> */}
        <PostHeader config={config}/>
        <PostImg config={config}/>
        <PostFooter config={config}/>
    </div>
    );
};
export default Post;
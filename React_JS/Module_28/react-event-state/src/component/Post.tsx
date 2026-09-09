import { use } from "react";

const Post = ({ postDataPromise }) => {
  const posts = use(postDataPromise);
  console.log(posts);

  return (
    
    <div>
        {
            posts.map((post)=>(
                <h2 className="user">{post.title}</h2>
            ))
        }
    </div>
  );
};

export default Post;

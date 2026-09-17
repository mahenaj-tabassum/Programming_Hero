interface PostObj {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const PostComponent = async () => {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return (
    <ul className="flex flex-wrap gap-5">
      {posts.map((post: PostObj) => (
        <li className="border text-2xl border-pink-200 p-5" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostComponent;

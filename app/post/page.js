

async function getPosts() {
  let postData = await fetch("https://jsonplaceholder.typicode.com/posts");

  postData = await postData.json();

  return postData;
}

const Post = async () => {
  let posts = await getPosts();
  // console.log(posts);

  return (
    <div className="">
      <h2>Post | Fetch Data With API in server side component</h2>

      {posts.map((post) => (
        <h4 key={post.id}>post Title: {post.title}</h4>
      ))}
    </div>
  );
};

export default Post;

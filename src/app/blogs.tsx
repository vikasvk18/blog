type BlogPost = {
  id: number;
  title: string;
  content: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Cursor based pagination vs key offset based pagination',
    content: 'A comparison of cursor-based and key/offset-based pagination strategies in modern APIs.',
  },
  // Add more blog posts as needed
];

export default function Blogs() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Blogs</h1>
      <ul style={{ fontSize: 18 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: 16 }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

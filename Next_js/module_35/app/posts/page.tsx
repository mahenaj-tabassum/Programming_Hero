// ===========================================
// Type Definition
// ===========================================

export interface PostObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// ===========================================
// HTTP Methods
// ===========================================

/*
GET    → Read data
POST   → Create data
PUT    → Replace existing data
PATCH  → Update part of existing data
DELETE → Remove data
*/

// ===========================================
// 4th Approach (Production Recommended)
// ===========================================

/*
Why?
- Handles errors with try...catch.
- Prevents silent failures.
- Best for real-world applications.

Use when:
- Production projects
- APIs that may fail
- You want custom error messages
*/

const getPosts = async (): Promise<PostObject[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      // SSG | SSR
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

/*
// ===========================================
// 3rd Approach (Reusable Helper)
// ===========================================

Why?
- Keeps fetching logic separate.
- Makes the component cleaner.
- Easy to reuse in multiple pages.

Use when:
- Multiple components need the same data.
- You want cleaner code.

const getPosts = async (): Promise<PostObject[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.json();
};
*/

/*
// ===========================================
// 2nd Approach (Separate Fetch Function)
// ===========================================

Why?
- Moves fetch logic outside the component.
- Easier to read than inline fetch.

Use when:
- Small projects
- Learning async functions
- Simple APIs

const PostsPromise = async (): Promise<PostObject[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.json();
};
*/

// ===========================================
// Page Component
// ===========================================

const PostsPage = async () => {
  /*
  ===========================================
  1st Approach (Inline Fetching)
  ===========================================

  Why?
  - Fetch directly inside the page.
  - Good for understanding how fetch works.

  Use when:
  - Learning Next.js
  - Quick testing
  - One-time data fetching

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts: PostObject[] = await response.json();

  console.log(Array.isArray(posts));
  */

  // Using the recommended helper function
  const posts = await getPosts();

  return (
    <div>
      <h2>Hello Posts: {posts.length}</h2>
    </div>
  );
};

export default PostsPage;

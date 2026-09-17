// TODO: Fetch data from an API instead of using static data
const blogsData = [
  {
    id: 1,
    title: "Understanding SSR vs SSG in Next.js",
    slug: "understanding-ssr-vs-ssg",
    author: "Mahenaj Tabassum",
    date: "2026-09-16",
    category: "Next.js",
    readTime: "4 min read",
    image: "/images/blog/ssr-vs-ssg.jpg",
    excerpt:
      "Learn the difference between Server-Side Rendering and Static Site Generation with simple examples.",
    content:
      "Server-Side Rendering (SSR) creates HTML at request time, while Static Site Generation (SSG) creates HTML during build time. SSR is ideal for frequently changing data, whereas SSG is perfect for fast-loading pages with mostly static content.",
  },
  {
    id: 2,
    title: "React vs Next.js: What's the Difference?",
    slug: "react-vs-nextjs",
    author: "Mahenaj Tabassum",
    date: "2026-09-15",
    category: "React",
    readTime: "5 min read",
    image: "/images/blog/react-vs-next.jpg",
    excerpt:
      "Confused between React and Next.js? Here's a beginner-friendly comparison.",
    content:
      "React is a JavaScript library for building user interfaces, while Next.js is a framework built on top of React. Next.js provides routing, SSR, SSG, API routes, and many performance optimizations out of the box.",
  },
  {
    id: 3,
    title: "Build Time vs Request Time Explained",
    slug: "build-time-vs-request-time",
    author: "Mahenaj Tabassum",
    date: "2026-09-14",
    category: "Web Development",
    readTime: "3 min read",
    image: "/images/blog/build-time.jpg",
    excerpt: "A simple analogy to understand when web pages are generated.",
    content:
      "Build time happens before users visit a website, while request time happens when a user requests a page. Understanding these concepts makes SSR and SSG much easier to understand.",
  },
  {
    id: 4,
    title: "5 Tips to Organize Your React Project",
    slug: "organize-react-project",
    author: "Mahenaj Tabassum",
    date: "2026-09-13",
    category: "React",
    readTime: "6 min read",
    image: "/images/blog/react-structure.jpg",
    excerpt:
      "Keep your React projects clean with a better folder structure and reusable components.",
    content:
      "Separate components, pages, hooks, utilities, and assets into dedicated folders. Reuse components whenever possible, use meaningful file names, and keep related files together.",
  },
  {
    id: 5,
    title: "How Suspense Makes Data Fetching Better",
    slug: "react-suspense-data-fetching",
    author: "Mahenaj Tabassum",
    date: "2026-09-12",
    category: "React",
    readTime: "5 min read",
    image: "/images/blog/suspense.jpg",
    excerpt:
      "Discover how React Suspense improves the loading experience for users.",
    content:
      "Suspense allows React to display a fallback UI while data is loading. It simplifies asynchronous rendering and creates smoother user experiences when combined with modern data-fetching patterns.",
  },
];

import Link from "next/link";
const Blogs = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {blogsData.map((blog) => (
        <div key={blog.id} className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>

            <div className="card-actions justify-end">
              <Link href={`/blogs/${blog.id}`} className="btn btn-primary">
                {blog.readTime}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

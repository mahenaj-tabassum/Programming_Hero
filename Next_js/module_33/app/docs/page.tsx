import Link from "next/link";

const DocsPage = () => {
  return (
    <div>
      <h1>Our Official Doc</h1>
      <Link className="bg-red-400" href="/about">
        About
      </Link>
    </div>
  );
};

export default DocsPage;

import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Fixed layout
      <div>{children}</div>
    </div>
  );
};

export default BlogLayout;

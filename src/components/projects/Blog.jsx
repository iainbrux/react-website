import React from 'react';
import ProjectNav from "../composables/ProjectNav";

const Blog = () => {
  return (
    <main>
      <article className="blog">
        <div className="glass">
          <h2>Blog</h2>
          <ProjectNav github="nodejs-mongodb-blog" demo="blog" />
        </div>
      </article>
    </main>
  )
}

export default Blog;
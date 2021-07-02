import React from 'react';
import ProjectNav from "../composables/ProjectNav";

const Sketch = () => {
  return (
    <main>
      <article className="sketch">
        <div className="glass">
          <h2>Sketch</h2>
          <ProjectNav github="etch-a-sketch" demo="sketch" />
        </div>
      </article>
    </main>
  )
}

export default Sketch;
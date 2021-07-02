import React from 'react';
import ProjectNav from "../composables/ProjectNav";

const Calculator = () => {
  return (
    <main>
      <article className="calculator">
        <div className="glass">
          <h2>Calculator</h2>
          <ProjectNav github="calculator" demo="calc" />
        </div>
      </article>
    </main>
  )
}

export default Calculator;
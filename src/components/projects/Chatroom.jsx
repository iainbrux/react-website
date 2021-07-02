import React from 'react';
import ProjectNav from "../composables/ProjectNav";

const Chatroom = () => {
  return (
    <main>
      <article className="chatroom">
        <div className="glass">
          <h2>Chatroom</h2>
          <ProjectNav github="vue-chatroom" demo="livechat" />
        </div>
      </article>
    </main>
  )
}

export default Chatroom;
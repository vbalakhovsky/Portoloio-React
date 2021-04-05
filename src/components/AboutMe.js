import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          I am a painter and I live in New York. I am coming to see the logic and the philosophy of coding that is not as removed from the work process of a painter as I thought. I enjoy how, just like in painting, stepping away from the first intuitive choice sometimes reveals to me the connection between different elements of my work.

It has been a little over four months since I began learning to code. While I still have a long road ahead of me, before I can confidently call myself a full stack developer, I have learned so much. I still feel amazed by the fact that I can write code and it works! During these months I have had success and failure, broke and repaired code. There were times when I stared at the computer screen and didn’t understand a thing, and there were times when the logic of coding sang to me in the lines of JavaScript. Here are my modest, but tremendously gratifying first coding milestones.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

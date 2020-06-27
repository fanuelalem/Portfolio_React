import React from "react";
import "./../css/style.css"

function About() {
  return (


    <div className="container">
      <div className="row">
        <div className="col-12">

          <div className="about-container">
            <h1 className="about-title">About Page</h1>
            <hr></hr>

            <img className="bio-image" src="/assets/img-1.jpeg" alt="e" />
            <div className="p-container">
              <p className="ptag">
              Full stack web developer leveraging a client management background to build intuitive and engaging user experiences on the web. Recently earned a certificate in full stack web development from the University of California, Berkeley, with newly developed front end and back end skills including JavaScript, CSS, React.js, responsive web design, Node.js, API interface, SQL, and mongoose. Known as an innovative critical thinker that enjoys solving problems and passionate about developing full stack applications. With each project, my aim is to introduce efficient solutions to users and engage my audience for an impactful user experience. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.       </p>
             </div>
           </div>
        </div>
      </div>
    </div>




  );
}

export default About;

import React from "react";
import image from "../../images/jordanB.jpg"
import resume from "../../devResume.pdf"

function About() {
  return (
    <div>
    <section className="main">  
       
          <article className="row"> 
              <article className="col 12"> 
              <h1>Jordan Benningfield</h1>
              </article>  
          </article>

          <hr className="style-one"/>
          <article className="row light">
              <article className="col-xs-12 col-md-6"> 
                  <h2>Hi, I'm Jordan. <br/>It's a pleasure to meet you.</h2>
                  <p> I’m a developer with experience in HTML, CSS, JavaScript, and Java/Apex. 
                    I enjoy developing small apps and API integration. 
                    My previous career/education was in geology, where I gained skills in project management and public relations. 
                    I learned how to operate professionally in a corporate environment and how to work collaboratively to accomplish goals and meet deadlines. 
                    Being ambitious, I accepted every opportunity to challenge myself and accept additional responsibilities. 
                    I have been programming since middle school and have recently decided to pursue development as a career rather than a hobby. 
                    I am seeking a position in software engineering or web developer where I can learn and expand upon my knowledge. 
                  </p>
              </article>
              <figure className="col-xs-12 col col-md-6">
                  <img id="headshot" src={image} className="img-fluid" alt="Image of Jordan Benningfield"/>
              </figure>
          </article>
          <article className="row">
            <a id='resumeLink' href= {resume} target='blank'> Check out my resume here </a>
          </article>
        </section>
        </div>
  );
}

export default About;
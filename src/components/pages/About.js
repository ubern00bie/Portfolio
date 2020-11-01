import React from "react";
import image from "../../images/jordanB.jpg"
import resume from "../../devResume.pdf"

function About() {
  return (
    <div>
    <section class="main">  
       
          <article class="row"> 
              <article class="col 12"> 
              <h1>Jordan Benningfield</h1>
              </article>  
          </article>

          <hr class="style-one"/>
          <article class="row light">
              <article class="col-xs-12 col-md-6"> 
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
              <figure class="col-xs-12 col col-md-6">
                  <img id="headshot" src={image} class="img-fluid" alt="Image of Jordan Benningfield"/>
              </figure>
          </article>
          <article class="row">
            <a id='resumeLink' href= {resume} target='blank'> Check out my resume here </a>
          </article>
        </section>
        </div>
  );
}

export default About;
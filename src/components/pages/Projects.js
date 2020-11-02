import react from 'react'
import Project from '../project'
import ProjectData from '../projectData/projects.json'
import image1 from '../../images/dayPlanner.PNG'
import image2 from '../../images/weatherApp.PNG'
import image3 from '../../images/teamBuilder.PNG'
import image4 from '../../images/NoteTaker.PNG'
import image5 from '../../images/Project1a.PNG'
import image6 from '../../images/staffManager.PNG'

const Projects = ()=> {
  return(
    <section className="main">
      <section className="row">
        <section className="col"> 
          <h1 id="projects"Projects/>   
          <hr/>    
        </section>
      </section>
      <Project props={ProjectData[0]}/>
      <Project props={ProjectData[1]}/>
      <Project props={ProjectData[2]}/>
      <Project props={ProjectData[3]}/>
      <Project props={ProjectData[4]}/>
      <Project props={ProjectData[5]}/>
    </section>
  )
}

export default Projects;
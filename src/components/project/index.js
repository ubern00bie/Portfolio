import Image from "../../images/Project1a.PNG"

const Project = (props)=> {
  const Description = props.description;
  const Link = props.link;


  return(

    <div className = 'light'>
    <h3>Collaborative Project - SpaceX and Nasa Project</h3><br/>
    <article className="row">

        <div className="col-xs-12-sm-12 col-md-4">
          <p>{Description}</p>
        </div>

        <div className="col-xs-12 col-md-4">
          <a href={Link} target="blank"/><img class="img-fluid projectImg" src = {Image} alt="Nasa and SpaceX Picture 1" />
        </div>

        <figure className="col-xs-12 col-md-4">
          <a href="https://reidbuckingham48.github.io/spacex-nasa-flight-data/data.html" target="blank"/><img class="img-fluid projectImg" src="images/Project1b.PNG" alt="Nasa and SpaceX Picture 2" />
        </figure>

    </article>
    </div>


  )

}

export default Project;
const Projects = ()=> {
  return(
    <section class="main">
      <section class="row">
        <section class="col"> 
          <h1 id="projects"Projects/>   
          <hr/>    
        </section>
      </section>

      <div class = 'light'>
        <h3>Work Day Scheduler powered by JavaScript</h3><br/>
        <article class="row">
          <div class="col-xs-12-sm-12 col-md-6">
          One project that has proven useful for me is this Work Day Scheduler powered by JavaScript. One can pull the planner up on their computer or phone and type a task into the text area. The task is saved to local storage and the time blocks adjust their color based on the current time of day.
          </div>
          <figure class="col-xs-12 col-md-6">
            <a href="https://ubern00bie.github.io/DayPlanner/" target="blank"><img class="img-fluid projectImg" src="images/dayPlanner.PNG" alt="Day Planner" /></a>
          </figure>
        </article>
      </div>
      
      <div class = 'dark'>
        <h3>Weather Dashboard - Powered by OpenWeatherMap API</h3><br/>
        <article class="row">

          <figure class="col-xs-12 col-md-6">
            <a href="https://ubern00bie.github.io/WeatherApp/" target="blank"><img class="img-fluid projectImg" src="images/weatherApp.PNG" alt="Weather App" /></a>
          </figure>

          <div class="col-xs-12-sm-12 col-md-6">
            For one of my recent homework assignments I was tasked with creating a responsive weather app powered by the openWeatherMap API using JavaScript. Enter a new city to save it to the search history and you can search that city in the future with the button generated.
          </div>

        </article>
      </div>

      
      <div class = 'light'>
        <h3>Collaborative Project - SpaceX and Nasa Project</h3><br/>
        <article class="row">

            <div class="col-xs-12-sm-12 col-md-4">
              <p>For the first collaborative project of our bootcamp, my group and I chose to integrate a SpaceX API, DarkSky's weather API, and a Nasa API into an interactive website. We made use of Bulma to create interactive timelines detailing the history of both Nasa and SpaceX. On our 'Mission Data' tab, responses from the API were used to populate tables with NASA project information and SpaceX flight data with links to articles & YouTube as well as display pictures of each flight's respective rocket. </p>
            </div>

            <figure class="col-xs-12 col-md-4">
              <a href="https://reidbuckingham48.github.io/spacex-nasa-flight-data/index.html" target="blank"><img class="img-fluid projectImg" src="images/Project1a.PNG" alt="Nasa and SpaceX Picture 1" /></a>
              <a href="https://reidbuckingham48.github.io/spacex-nasa-flight-data/spacex.html" target="blank"><img class="img-fluid projectImg" src="images/Project1c.PNG" alt="Nasa and SpaceX Picture 1" /></a>
            </figure>

            <figure class="col-xs-12 col-md-4">
              <a href="https://reidbuckingham48.github.io/spacex-nasa-flight-data/data.html" target="blank"><img class="img-fluid projectImg" src="images/Project1b.PNG" alt="Nasa and SpaceX Picture 2" /></a>
            </figure>

        </article>
      </div>

      <div class = 'dark'>
        <h3>Team Builder</h3><br/>
        <article class="row">

          <figure class="col-xs-12 col-md-6">
            <a href="https://github.com/ubern00bie/Team-Builder" target="blank"><img class="img-fluid projectImg" src="images/teamBuilder.PNG" alt="Team Builder App Image" /></a>
          </figure>

          <div class="col-xs-12-sm-12 col-md-6">
            This JavaScript powered team builder allows the user to generate a template for teams with the roles of each person on that team using a command line interface. 
          </div>

        </article>
      </div>

          
      <div class = 'light'>
        <h3>Staff Manager</h3><br/>
        <article class="row">

          <div class="col-xs-12-sm-12 col-md-6">
            <p>This command line app allows the user to keep track of employess within their company database. Employee information is saved to a local MySQL server where that information can be modified and queried to keep track of employees, roles, salaries, and their managers. </p>
          </div>

          <figure class="col-xs-12 col-md-6">
            <a href="https://github.com/ubern00bie/staffManager" target="blank"><img class="img-fluid projectImg" src="images/staffManager.PNG" alt="Staff Manager App Image" /></a>
          </figure>

        </article>
      </div>

      <div class = 'dark'>
        <h3>Note Taker</h3><br/>
        <article class="row">
          <figure class="col-xs-12 col-md-6">
            <a href="https://github.com/ubern00bie/Note_Taker" target="blank"><img class="img-fluid projectImg" src="images/NoteTaker.PNG" alt="Note Taker App Image" /></a>
          </figure>
          <div class="col-xs-12-sm-12 col-md-6">
            This note taking app is powered by javascript and is excellent for keeping track of tasks throughout the day. The user can create and delete notes which are saved to local storage allowing the user to access the saved notes even after the window has been closed.
          </div>
        </article>
      </div>

    </section>
  )
}

export default Projects;
import React from 'react';

class Project extends React.Component {
  render() {
    console.log(this.props.props.Style)
    if(this.props.props.Style === 'dark'){
      return(
        <div className = {this.props.props.Style}>
          <h3>{this.props.props.Title}</h3><br/>
          <article className="row">

          <div className="col-xs-12-sm-12 col-md-6">
            <p>{this.props.props.Description}</p>
          </div>

          <figure className="col-xs-12 col-md-6">
            <a href={this.props.props.Link} target="blank"/><img className="img-fluid projectImg" src = {this.props.props.Image} alt="Project Image" />
          </figure>

        </article>
        </div>
      )
    } else {
      return(
      
        <div className = {this.props.props.Style}>
          <h3>{this.props.props.Title}</h3><br/>
          <article className="row">

          <figure className="col-xs-12 col-md-6">
            <a href={this.props.props.Link} target="blank"/><img className="img-fluid projectImg" src = {this.props.props.Image} alt="Project Image" />
          </figure>

          <div className="col-xs-12-sm-12 col-md-6">
            <p>{this.props.props.Description}</p>
          </div>

        </article>
        </div>
      )
    }
  }
}

export default Project;
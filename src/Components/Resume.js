import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var languages = this.props.data.skills.languages.map(function(skills){
        var skillImage = 'images/skills/' + skills.img;
        return <li key={skills.name}>
            <img className="skillImg" alt={skills.name} src={skillImage} />
            <h5>{skills.name}</h5>
            <p>{skills.description}</p>
          </li>
      })
      var frameworks = this.props.data.skills.frameworks.map(function(skills){
        var skillImage = 'images/skills/' + skills.img;
        return <li key={skills.name}>
            <img className="skillImg" alt={skills.name} src={skillImage} />
            <h5>{skills.name}</h5>
            <p>{skills.description}</p>
          </li>
      })      
      var tools = this.props.data.skills.tools.map(function(skills){
        var skillImage = 'images/skills/' + skills.img;
        return <li key={skills.name}>
            <img className="skillImg" alt={skills.name} src={skillImage} />
            <h5>{skills.name}</h5>
            <p>{skills.description}</p>
          </li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div>
          <h4>Languages</h4>
          <hr />
				   <ul className="skills">
					  {languages}
					</ul>
				</div>
				<div>
          <h5>Frameworks</h5>
          <hr />
				   <ul className="skills">
					  {frameworks}
					</ul>
				</div>
				<div>
          <h5>Tools</h5>
          <hr />
				   <ul className="skills">
					  {tools}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;

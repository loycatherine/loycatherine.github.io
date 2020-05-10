import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing} {item.MonthOfEnding} {item.YearOfEnding}</em></p>
                          <p className="achievements">
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfStarting} {item.YearOfStarting} {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p className="achievements">
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
                {
                  resumeData.allSkills && resumeData.allSkills.map((item) => {
                    return(
                      <div>
                        <p className = "skill">
                        {item.skillsDescription}
                        </p>
                        
                        <div className="bars">

                          <ul className="skills">
                              {
                                item.skills && item.skills.map((item) => {
                                  return(
                                    <li>
                                    <span className={`bar-expand ${item.skillname.toLowerCase().replace(/\s+/g, '').replace("-", '').replace(".", '')}`}>
                                    </span><em>{item.skillname}</em>
                                    </li>
                                  )
                                })
                              }

                          </ul>

                        </div>

                      </div>
                    )
                  })
                }
              </div>
   			    </div>
      </section>
    );
  }
}
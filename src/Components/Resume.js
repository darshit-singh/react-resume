import React, { Component } from 'react';

class Resume extends Component {
    render() {
        if (this.props.data) {
            
            var education = this.props.data.education.map((edu) => {
                return (<div key = {edu.school} className="row item">
                            <div className="twelve columns">
                                <h3>{edu.school}</h3>
                                <p className="info">{edu.degree}<span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                                <p>
                                    {edu.description}
                                </p>
                            </div>
                        </div>)
            })
            var work = this.props.data.work.map((job) => {
                return (<div key = {job.company} className="row item">
                            <div className="twelve columns">
                                <h3>{job.company}</h3>
                                <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>

                                <p>
                                    {job.description}
                                </p>
                            </div>
                        </div>)
            })

            var skills = this.props.data.skills
            var skillsDescription = this.props.data.skillsDescription
        }
        return (
            <section id="resume">
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                    {education}
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {/* <p>{skillsDescription}</p> */}
                        <div className="bars">
                            {skills && <ul className="skills">
                                <li><span className="bar-expand photoshop"></span><em>{skills[0].name}</em></li>
                                <li><span className="bar-expand illustrator"></span><em>{skills[1].name}</em></li>
                                <li><span className="bar-expand wordpress"></span><em>{skills[2].name}</em></li>
                                <li><span className="bar-expand css"></span><em>{skills[3].name}</em></li>
                                {/* <li><span className="bar-expand html5"></span><em>{skills[4].name}</em></li> */}
                                <li><span className="bar-expand jquery"></span><em>{skills[5].name}</em></li>
                            </ul>}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;

import _ from 'lodash';
import React, { PropTypes } from 'react';

class AboutMe extends React.Component {
    render () {
        const {
            setSelectedWorkExperience,
            workExperience,
        } = this.props;

        const workExperienceElements = _.map(workExperience, (experience, id) => {
            let relevantSkillsElement = null;
            if (experience.relevantSkills.length !== 0) {
                const relevantSkills = experience.relevantSkills.join(', ');
                relevantSkillsElement = (
                    <p>
                        <b>Relevant Skills:</b> { relevantSkills }
                    </p>
                );
            }
            let projectElements = null;
            let projectElementList = null;
            if (experience.projects.length !== 0) {
                projectElements = _.map(experience.projects, (project) => {
                    return (
                        <div key={ project.name } className="project">
                            <a href={ project.url } className="hover-me with-after">{ project.name }</a>
                        </div>
                    )
                });
                projectElementList = (
                    <div className="project-element-list">
                        <b>Projects:</b>
                        { projectElements }
                    </div>
                );
            }
            return (
                <div
                    key={ id }
                    className="work-experience-list-member"
                >
                    <a
                        className="experience-name hover-me with-after"
                        href={ experience.url }
                    >
                        <h4>{ experience.name }</h4>
                    </a>
                    <p className="experience-dates">{ experience.datesOfEmployment }</p>
                    <p className="experience-role">{ experience.role }</p>
                    <p className="experience-description">{ experience.description }</p>
                    { projectElementList }
                    { relevantSkillsElement }
                </div>
            );
        })

        return (
            <div className="about-me">
                <p>
                    Want to know more about me, huh? I'm flattered! I was born in upstate New York and moved to Boston to attend Northeastern University, where I got a dual degree in Music Technology/Composition and Interactive Media.
                    <br />
                    <br />
                    Since then, I've been fortunate enough to work at these cool places:
                </p>
                <div className="work-experience-list">
                    { workExperienceElements }
                </div>
            </div>
        )
    }
}

AboutMe.propTypes = {
    setSelectedWorkExperience: PropTypes.func,
    workExperience: PropTypes.object,
}

export default AboutMe;

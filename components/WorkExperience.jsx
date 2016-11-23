import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class WorkExperience extends React.Component {
    render() {
        const {
            datesOfEmployment,
            description,
            name,
            projects,
            relevantSkills,
            role,
            url,
        } = this.props;
        let relevantSkillsElement = null;
        if (relevantSkills.length !== 0) {
            const listOfSkills = relevantSkills.join(', ');
            relevantSkillsElement = (
                <p className="relevant-skills">
                    <b>Relevant Skills:</b> { listOfSkills }
                </p>
            );
        }
        let projectElements = null;
        let projectElementList = null;
        if (projects.length !== 0) {
            projectElements = _.map(projects, (project) => {
                return (
                    <div key={ project.name } className="project">
                        <a href={ project.url } target="_" className="hover-me with-after">{ project.name }</a>
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
            <div className="work-experience">
                <Link to="/about_me/">About Me</Link>
                <div className="inner">
                    <a className="experience-name hover-me with-after" href={ url } target="_">
                        <h4>{ name }</h4>
                    </a>
                    <p className="experience-dates">{ datesOfEmployment }</p>
                    <p className="experience-role">{ role }</p>
                    <p className="experience-description">{ description }</p>
                    { projectElementList }
                    { relevantSkillsElement }
                    <div className="under-line">
                        <div className="under-line-inner" />
                    </div>
                </div>
            </div>
        );
    }
}

WorkExperience.propTypes = {
    datesOfEmployment: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
        })),
    relevantSkills: PropTypes.arrayOf(React.PropTypes.string),
    role: PropTypes.string,
    url: PropTypes.string
}
export default WorkExperience;

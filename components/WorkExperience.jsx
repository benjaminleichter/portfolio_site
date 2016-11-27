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
            key
        } = this.props;

        const id = this.props.params.id;

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
            projectElements = _.map(projects, (project, index) => {
                const commaAndSpace = (index > 0) ? ', ' : ' ';
                return (
                    <div key={ project.name } className="project">
                        <a href={ project.url } target="_" className="hover-me with-after">
                            { `${ commaAndSpace }${ project.name }` }
                        </a>
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
                <Link to="/about_me/">
                    <span className="icon back-arrow-icon light" />
                </Link>
                <div className={ `header ${ id }` }>
                    <div className="inner">
                        <a className="experience-name" href={ url } target="_">
                            <p className="page-title">{ name }</p>
                        </a>
                        <p className="experience-dates">{ datesOfEmployment }</p>
                        <p className="experience-role">{ role }</p>
                    </div>
                </div>
                <div className="body">
                    <div className="inner">
                        <p className="experience-description">{ description }</p>
                        { projectElementList }
                        { relevantSkillsElement }
                        <div className="under-line">
                            <div className="under-line-inner" />
                        </div>
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

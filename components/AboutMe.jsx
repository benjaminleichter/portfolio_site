import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class AboutMe extends React.Component {
    render () {
        const {
            workExperience,
        } = this.props;

        const workExperienceLinks = _.map(workExperience, (experience, id) => {
            return (
                <Link
                    className={ `work-experience-link ${ id }` }
                    key={ id }
                    to={ `work_experience/${id}/` }
                >
                    { experience.name }
                </Link>
            )
        })

        return (
            <div className="about-me">
                <div className="header">
                    <div className="inner">
                        <p className="page-title dark">Hey, I'm Ben.</p>
                    </div>
                </div>
                <div className="body">
                    <div className="inner">
                        <p>
                            I'm a web developer currently living in Boston, Massachusetts. I graduated from Northeastern University in 2015 with a dual degree in Music Technology and Interactive Media.
                            <br />
                            <br />
                            Since then, I've been fortunate enough to work at these wonderful places:
                        </p>
                    </div>
                    <div className="work-experience-list">
                        { workExperienceLinks }
                    </div>
                    <div className="inner">
                        <div className="under-line">
                            <div className="under-line-inner" />
                        </div>
                        <span className="footer-text">
                            Check out the code for this website on <a href="https://github.com/benjaminleichter/portfolio_site" target="_">GitHub</a>.
                            <br />
                            Icons on this site created by <a href="https://thenounproject.com/ryo.sato.7127/" target="_">Ryo Sato</a> and used under the <a href="https://creativecommons.org/" target="_">Creative Commons License</a>.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

AboutMe.propTypes = {
    workExperience: PropTypes.objectOf(
        PropTypes.shape({
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
        })),
}

export default AboutMe;

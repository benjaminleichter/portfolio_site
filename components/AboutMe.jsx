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
                <Link to="/">
                    <span className="icon back-arrow-icon" />
                </Link>
                <div className="inner">
                    <p className="margin-top-2-em">
                        Want to know more about me, huh? I'm flattered! I was born in upstate New York and moved to Boston to attend Northeastern University. I graduated in 2015 with a dual degree in Music Technology and Interactive Media.
                        <br />
                        <br />
                        Since then, I've been fortunate enough to work at these cool places:
                    </p>
                </div>
                <div className="work-experience-list">
                    { workExperienceLinks }
                </div>
                <div className="inner">
                    <p>I like writing code, making music, learning new stuff, and watching Arrested Development even though I've seen the whole thing already.</p>
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

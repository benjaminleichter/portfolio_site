import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Footer from './Footer.jsx';

class AboutMe extends React.Component {
    render () {
        const {
            workExperience,
        } = this.props;
        console.log(Object.keys(workExperience));
        const workExperienceLinks = Object.keys(workExperience).map((id) => {
            const name = workExperience[id].name;
            return (
                <Link
                    className={ `work-experience-link ${ id }` }
                    key={ id }
                    to={ `work_experience/${id}/` }
                >
                    { name }
                </Link>
            );
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
                    <Footer />
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

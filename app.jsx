import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AboutMe from './components/AboutMe.jsx';
import Intro from './components/Intro.jsx';

import actions from './actions.js';

class App extends React.Component {
    render() {
        const {
            aboutMeShown,
            boundActions,
            introShown,
            workExperience,
        } = this.props;

        const handleIntroSetAboutMeShown = () => {
            boundActions.setIntroShown(false);
            boundActions.setAboutMeShown(true);
        }

        return (
            <div className="app">
                { introShown &&
                    <Intro
                        showAboutMe={ handleIntroSetAboutMeShown }
                    />
                }
                { aboutMeShown &&
                    <AboutMe
                        setSelectedWorkExperience={ (selectedExperience) => console.log(selectedExperience) }
                        workExperience={ workExperience }
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        aboutMeShown: state.aboutMeShown,
        introShown: state.introShown,
        workExperience: state.workExperience,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        boundActions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
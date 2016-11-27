import _ from 'lodash';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AboutMe from './components/AboutMe.jsx';
import WorkExperience from './components/WorkExperience.jsx';

import actions from './actions.js';

class App extends React.Component {
    render() {
        const {
            aboutMeShown,
            boundActions,
            introShown,
            workExperience,
        } = this.props;

        const childElement = [];
        let childProps = {};

        React.Children.map(this.props.children, (child) => {
            childElement.push(child);
        });

        /*
            Because any child of this component is a route,
            there should only ever be one at a time.
        */
        if (childElement.length > 1) {
            throw new Error('Unexpectedly more than one child element in App.jsx');
        }
        switch(childElement[0].type) {
            case WorkExperience:
                const selectedWorkExperience = workExperience[this.props.params.id];
                childProps = selectedWorkExperience;
                break;
            default:
                childProps = {
                    workExperience
                };
                break;
        }
        return (
            <div className="app">
                { React.cloneElement(this.props.children, childProps) }
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
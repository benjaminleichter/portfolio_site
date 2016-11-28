import React from 'react';
import { connect } from 'react-redux';

import WorkExperience from './components/WorkExperience.jsx';

class App extends React.Component {
    render() {
        const {
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
        workExperience: state.workExperience,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

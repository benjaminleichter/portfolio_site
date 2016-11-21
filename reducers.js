import _ from 'lodash';
import { ActionTypes } from './actions.js';

const initialState = {
    aboutMeShown: false,
    introShown: true,
    selectedWorkExperience: null,
    workExperience: {
        bevspot: {
            name: 'BevSpot',
            role: 'Web Developer (Front-End/BackEnd)',
            datesOfEmployment: 'October 2015 - Current',
            url: 'https://www.bevspot.com',
            projects: [],
            description: 'At BevSpot, I work on a web app for bars and restaurants to manage their inventory, order from distributors, and track their sales data. We get a great deal of freedom to try new technologies as long as we can give sound reasons for how they might make our code better or improve the development process. As a result, I\'ve been able to start writing React apps and begin using TypeScript within the time that I\'ve been working here. In addition to working with interesting front-end technologies, I get to be involved in a lot of data design sessions and write a satisfying amount of Python and Java.',
            relevantSkills: ['JavaScript', 'ReactJS', 'TypeScript', 'Django', 'Java']
        },
        mtc: {
            name: 'MTC',
            role: 'Web Developer (Front-End/Back-End)',
            datesOfEmployment: 'October 2014 - October 2015',
            url: 'https://www.masstechnology.com/',
            projects: [{
                name: 'Vocoli',
                url: 'https://www.vocoli.com',
            }],
            description: 'At MTC, I mostly worked on an employee engagement software called Vocoli. I would receive a mock from our designer and build whole features from the ui to the stored procedures to get and set data.',
            relevantSkills: ['JavaScript', 'PHP', 'SQL']
        },
        harvard_cid: {
            name: 'Harvard CID',
            role: 'Front-End Web Developer',
            datesOfEmployment: 'January 2014 - July 2014',
            url: 'https://www.hks.harvard.edu/centers/cid',
            projects: [{
                name: 'Atlas of Economic Complexity',
                url: 'http://atlas.cid.harvard.edu/',
            }],
            description: 'At CID, I worked on the front-end of a tool that visualizes the economic makeup of countries. The idea is to help nations make connections between products they make with the resources they have, and products they could be making with those same resources. They can also look at what countires their neighbors have been trading with and what they\'ve been trading. In this way, the can potentially find new partners for trade through neighboring countires.',
            relevantSkills: ['JavaScript', 'd3'],
        },
    }
};

const reduceSetAboutMeShown = (state, action) => {
    const updates = {
        aboutMeShown: action.payload.isShown,
    };
    return _.assign(_.cloneDeep(state), updates);
}

const reduceSetIntroShown = (state, action) => {
    const updates = {
        introShown: action.payload.isShown,
    };
    return _.assign(_.cloneDeep(state), updates);
};

const reduceSetSelectedWorkExperience = (state, action) => {
    const updates = {
        selectedWorkExperience: action.payload.selectedWorkExperience,
    };
    return _.assign(_.cloneDeep(state), updates);
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_ABOUT_ME_SHOWN:
            return reduceSetAboutMeShown(state, action);
        case ActionTypes.SET_INTRO_SHOWN:
            return reduceSetIntroShown(state, action);
        case ActionTypes.SET_SELECTED_WORK_EXPERIENCE:
            return reduceSetSelectedWorkExperience(state, action);
        default:
            return state;
    }
}
export default reducers;

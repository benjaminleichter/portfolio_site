const initialState = {
    aboutMeShown: false,
    introShown: true,
    selectedWorkExperience: null,
    workExperience: {
        'bevspot': {
            name: 'BevSpot',
            role: 'Software Engineer',
            datesOfEmployment: 'October 2015 - Current',
            url: 'https://www.bevspot.com',
            projects: [],
            description: 'At BevSpot, I work on a web app used by bars and restaurants to manage their inventory, order from distributors, and track their sales data. We get a great deal of freedom to try new technologies as long as we can give sound reasons for how they might make our code better or improve the development process. As a result, I\'ve been able to start writing React apps and begin using TypeScript. In addition to working with interesting front-end technologies, I get to be involved in a lot of data design sessions and write a good amount of Python and Java.',
            relevantSkills: ['JavaScript', 'ReactJS', 'TypeScript', 'Django', 'Java']
        },
        'mtc': {
            name: 'MTC',
            role: 'Web Developer',
            datesOfEmployment: 'October 2014 - October 2015',
            url: 'https://www.masstechnology.com/',
            projects: [{
                name: 'Vocoli',
                url: 'https://www.vocoli.com',
            }],
            description: 'At MTC, I mostly worked on an employee engagement software called Vocoli. The jist of Vocoli is to empower employees through anonymous suggestions and polls, and to give management the tools to create surveys and gather information from the data collected by them. I would receive a mock from our designer and build whole features, from the UI, all the way through to the database.',
            relevantSkills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']
        },
        'harvard-cid': {
            name: 'Harvard CID',
            role: 'Front-End Web Developer',
            datesOfEmployment: 'January 2014 - July 2014',
            url: 'https://www.hks.harvard.edu/centers/cid',
            projects: [{
                name: 'Atlas of Economic Complexity',
                url: 'http://atlas.cid.harvard.edu/',
            }],
            description: 'At CID, I worked on the front-end of a tool that visualizes the economic makeup of countries. The idea is to help countires make connections between products they make with the resources they have, and products they could be making with those same resources. They can also look at what countries their neighbors have been trading with and what they\'ve been trading. In this way, they can potentially find new trade partners with minimal effort.',
            relevantSkills: ['HTML', 'CSS', 'JavaScript', 'd3'],
        },
    }
};

const reducers = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default reducers;

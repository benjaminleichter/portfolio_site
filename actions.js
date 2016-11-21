export const ActionTypes = {
    'SET_ABOUT_ME_SHOWN': 'SET_ABOUT_ME_SHOWN',
    'SET_INTRO_SHOWN': 'SET_INTRO_SHOWN',
    'SET_SELECTED_WORK_EXPERIENCE': 'SET_SELECTED_WORK_EXPERIENCE',
};

const setAboutMeShown = (isShown) => ({
    payload: {
        isShown,
    },
    type: ActionTypes.SET_ABOUT_ME_SHOWN,
});
const setIntroShown = (isShown) => ({
    payload: {
        isShown,
    },
    type: ActionTypes.SET_INTRO_SHOWN,
});
const setSelectedWorkExperience = (selectedWorkExperience) => ({
    payload: {
        selectedWorkExperience,
    },
    type: ActionTypes.SET_SELECTED_WORK_EXPERIENCE,
});

const actions = {
    setAboutMeShown,
    setIntroShown,
    setSelectedWorkExperience,
};
export default actions;

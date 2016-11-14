export const ActionTypes = {
    'SET_ABOUT_ME_SHOWN': 'SET_ABOUT_ME_SHOWN',
    'SET_INTRO_SHOWN': 'SET_INTRO_SHOWN',
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

const actions = {
    setAboutMeShown,
    setIntroShown,
};
export default actions;

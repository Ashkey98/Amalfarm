import GET_NEWS_FEED from '../Action/actionTypes';

const initialState = {
  newsFeed: [],
};

var feedReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.GET_NEWS_FEED:
            return __assign(__assign({}, state), { newsFeed: action.payload });
        default:
            return state;
    }
};
exports.default = feedReducer;
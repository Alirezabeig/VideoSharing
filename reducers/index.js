
import {ADD_CONTENT, FETCH_CONTENT} from '../actions/index';

const init= {}

const reducer = (state = init, action) => {

  switch (action.type) {

    case FETCH_CONTENT: {
      console.log("\nFetch-posts Reducer- =>",state)
      return {
    ...state,
    ...actions.posts
      };
    }
    case ADD_CONTENT: {
      console.log("\nrstate:AddContent pushed- reducer =>", state);
      return {
        ...state,
        [action.id]:{
          id: action.id,
          content:action.content,
          }
      };
    }

  }
}

export default reducer

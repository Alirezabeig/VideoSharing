
import {ADD_CONTENT, FETCH_CONTENT} from '../actions/index';

//
// const init= {
//   post:{
//     content:'',
//     }
// }

const reducer = (state=init, action) => {

  switch (action.type) {
    case FETCH_CONTENT: {
      console.log("\nAll posts- Reducer =>",state)
      return {
    ...state,
      };
    }
    case ADD_CONTENT: {
      console.log("\nreducer add post state =>", state);
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

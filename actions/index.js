
export const ADD_CONTENT = 'ADD_CONTENT';
export const FETCH_CONTENT = 'FETCH_CONTENT'

export const AddContent = (id, content)=> {
  console.log("ADD content- actions");
  return {
   type: 'ADD_CONTENT',
    id,
    content,
  }
};


export const receiveContent = (post)=> {
  console.log("content");
  return {
   type:'FETCH_CONTENT',
  post,
  }
};

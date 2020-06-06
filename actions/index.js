
export const ADD_CONTENT = 'ADD_CONTENT';
export const FETCH_CONTENT = 'FETCH_CONTENT'

export const addContent = (id, content)=> ({
   type: 'ADD_CONTENT',
    id,
    content
});


export const receiveContent = (post)=> {
  console.log("content");
  return {
   type:'FETCH_CONTENT',
  post,
  }
};

import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 9999),
        },
      ];
      break;
    case "delete_blogPost":
      return state.filter((item) => item.id !== action.payload);
      break;

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
    callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete_blogPost", payload: id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);

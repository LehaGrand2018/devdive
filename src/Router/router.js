import {
  createBrowserRouter,

} from "react-router-dom";

import PostsList from '../App/PostsList/PostsList';
import TagsList from '../App/TagsList/TagsList'
import PostCommentsList from '../App/PostCommentsList/PostCommentsList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsList/>,
    children: [
    ],
  },
  {
    path: "posts/:postId",
    element: <PostCommentsList/>,
  },
  {
    path: "/tags",
    element: <TagsList/>,
  },
 
]);

export default router;

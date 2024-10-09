import {
  createBrowserRouter,

} from "react-router-dom";

import PostsList from '../App/PostsList/PostsList';
import TagsList from '../App/TagsList/TagsList'
import PostCommentsList from '../App/PostCommentsList/PostCommentsList'
import Profile from "../App/Profile/Profile";
import AddPost from "../App/AddPost/AddPost";

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
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/addPost",
    element: <AddPost/>
  }
]);

export default router;

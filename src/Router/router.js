import {
  createBrowserRouter,

} from "react-router-dom";

import PostsList from '../App/PostsList/PostsList';
import TagsList from '../App/TagsList/TagsList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsList/>,
  },
  {
    path: "/tags",
    element: <TagsList/>,
  },
]);

export default router;

import {
  createBrowserRouter,

} from "react-router-dom";

import PostsList from '../App/Components/PostsList/PostsList';
import TagsList from '../App/Components/TagsList/TagsList'

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

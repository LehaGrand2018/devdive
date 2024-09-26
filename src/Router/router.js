import {
  createBrowserRouter,

} from "react-router-dom";

import App from "../App/App";
import Tags from "../App/Tags";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/tags",
    element: <Tags/>,
  },
]);

export default router;

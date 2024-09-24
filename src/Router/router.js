import {
  createBrowserRouter,

} from "react-router-dom";

import App from "../App/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/tags",
    element: <div>Tags</div>,
  },
]);

export default router;

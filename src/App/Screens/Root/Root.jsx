import { useNavigate } from "react-router-dom";
import GlobalStore from "../../Stores/GlobalStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Root = observer(() => {
  const { isLoggedIn } = GlobalStore;
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/questions")
    // if (isLoggedIn === "false") {
    //   navigate("/autorization");
    // }
    // if (isLoggedIn === "true") navigate("/questions");
    //eslint-disable-next-line
  }, [isLoggedIn]);

  return <></>;
});

export default Root;

import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserDetails = () => {
    axios
      .get("/user")
      .then((res) => {
        console.log("getUserDetails xcxcx => ", res?.data?.data);
        // setUser(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;

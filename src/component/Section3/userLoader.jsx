import React, {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useState,
  } from "react";
  import axios from "axios";
  
  const UserLoader = ({  userId , children  }) => {
    const [user, setUser] = useState(null);
  
    const getUserDetails = () => {
      axios
        .get(`/user/${userId}`)
        .then((res) => {
            console.log("getUserDetails by id => " , res)
       
          setUser(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getUserDetails();
    }, [userId]);
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
  
  export default UserLoader;
  
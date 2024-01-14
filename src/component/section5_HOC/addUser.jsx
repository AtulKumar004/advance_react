import axios from "axios";
import React, { useEffect, useState } from "react";

const addUser = (Component) => {
  return (props) => {
    const [newUser, setNewUser] = useState({
      name: "",
      pages: null,
      title: "",
      price: null,
    });
    const [allUserData, setAllUserData] = useState([]);
    const handleGetUsersData = () => {
      axios
        .get("/books")
        .then((res) => {
            console.log("user => " , res?.data )
          setAllUserData(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const handleSubmit = () => {
      axios
        .post("/books", newUser)
        .then((res) => {
          if (res?.data?.statusCode === 200) {
            handleGetUsersData();
            setNewUser({
                name: "",
                pages: null,
                title: "",
                price: null,

            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    useEffect(() => {
      handleGetUsersData();
    }, []);

    return (
      <Component
        handleSubmit={handleSubmit}
        allUserData={allUserData}
        newUser={newUser}
        setNewUser = {setNewUser}
      />
    );
  };
};

export default addUser;

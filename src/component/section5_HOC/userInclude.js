import axios from 'axios';
import React, { useEffect, useState } from 'react'

const userInclude = (Component , id) => {
  return (props) => {
    const [user, setUserData] = useState(null);
    const handleGetUSerInfo = () => {
        axios.get(`/user/${id}`).then((res) => {
            setUserData(res?.data)
        })
    }
    useEffect(() => {
        handleGetUSerInfo()

    },[])
    return (
        <Component user = {user} {...props}/>
    )
  }
}

export default userInclude

import React, { Component } from 'react'

const lopProps = Component => {
 return (props) => {
    console.log(props);
    return (

        <Component  {...props}/>
    )

 }
}

export default lopProps

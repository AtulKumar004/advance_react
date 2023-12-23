import axios from 'axios';
import React, { Children, cloneElement, isValidElement, useEffect, useState } from 'react'

const ResourceLoader = ({  resourceUrl , resourceName , children  }) => {
    const [resource, setResource] = useState(null);
  
    const getUserDetails = () => {
      axios
        .get(`${resourceUrl}`)
        .then((res) => {
        
       
            setResource(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getUserDetails();
    }, [resourceUrl]);
    return (
      <>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, { [resourceName] : resource });
          }
          return child;
        })}
      </>
    );
  };

export default ResourceLoader
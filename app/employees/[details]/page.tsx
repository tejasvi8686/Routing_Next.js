'use client';
import React from 'react';





const employees = ({params}) => {
    console.log(params);
  return (
    <div>
      <h1>Emplpoyes Details:  </h1>
      <h3>Employes name: {params.details}</h3>
    </div>
  )
}

export default employees

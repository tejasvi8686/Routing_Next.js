"use client";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>blog name {params.post[0]}</h1>
      <h1>post name {params.post[1]} </h1>
    </div>
  );
};

export default page;

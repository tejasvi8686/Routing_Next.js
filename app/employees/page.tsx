import Link from "next/link";
import React from "react";

const Employees = () => {
  return (
    <div>
      <h2>Employees</h2>

      <ul>
        <li>
            <Link href={"/employees/tejasvi"}>Tejasvi</Link>
        </li>
        <li>
        <Link href={"/employees/raj"}>raj</Link>
        </li>
        <li>
        <Link href={"/employees/shiwank"}>shiwank</Link>
        </li>
        <li>
        <Link href={"/employees/rajasava"}>rajasava</Link>
        </li>
      </ul>
    </div>
  );
};

export default Employees;

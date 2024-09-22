"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      Contact
      <div>
        <Link href={"/home"}>Home</Link>
        <br />
        <br />
        <button
          className="bg-blue-600 text-black"
          onClick={() => router.push("/careers")}
        >
          Careers
        </button>

        <br />
        <br />
        <button
          className="bg-blue-600 text-black"
          onClick={() => router.push("/contact/portal")}
        >
          Portal
        </button>

        <br />
        <br />
        <button
          className="bg-blue-600 text-black"
          onClick={() => router.push("/contact/user")}
        >
          User
        </button>
      </div>
    </div>
  );
};

export default page;

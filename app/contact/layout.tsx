"use client";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const currentPathname = usePathname();
  console.log(currentPathname);

  const validPaths = ["/contact/portal", "contact/user"];

  return (
    <>
      {currentPathname !== "/contact/portal" ? <h2>hey tejasvi</h2> : null}

      {children}
    </>
  );
}

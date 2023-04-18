import Link from "next/link";
import React from "react";

import { Logo } from "./Icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="p-full flex flex-row items-center justify-between">
      <Link href="/">
        <Logo className="h-24 w-24 cursor-pointer fill-slate-700" />
      </Link>
      <nav>
        <ul className="flex flex-row items-center space-x-8">
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="/dashboard"> Dashboard </Link>
          </li>
          <li>
            <button className="rounded-md bg-pink-700 px-4 py-2" type="button">
              {" "}
              Sign In{" "}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

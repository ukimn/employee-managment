"use client";

import React, { useState } from "react";
import Link from "next/link";
import links from "@/lib/routesThings";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

// Icons
import { IoMenu } from "react-icons/io5";
import { BsX } from "react-icons/bs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const { data: session, error, isPending } = authClient.useSession();
  const handleSignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };
  return (
    <header className="bg-blue-500 flex items-center justify-between px-5 py-3">
      <nav>
        <h1 className={"text-white text-3xl font-medium"}>My Employee</h1>
      </nav>
      {/* Main Menu Start */}
      <nav className={"max-sm:hidden flex"}>
        <ul className={"flex items-center justify-between space-x-3"}>
          {links.map((link) => {
            return (
              <Link
                prefetch={true}
                className={
                  "text-white text-xl font-medium pb-[2px] hover:border-b-2"
                }
                href={link.route}
                key={link.id}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
        {session ? (
          <div className="ml-4 flex items-center space-x-4 bg-white p-2 rounded-sm">
            <h1 className="text-black text-xl font-medium">
              {session.user.name}
            </h1>
            <Button onClick={handleSignout}>Logout</Button>
          </div>
        ) : (
          <div className="ml-4 flex items-center space-x-4 bg-white p-2 rounded-sm">
            <Button onClick={() => router.push("/login")}>Login</Button>
          </div>
        )}
      </nav>
      {/* Main Menu End */}
      {/* Burger Menu Start */}
      <nav className={"hidden max-sm:block"}>
        {open === false ? (
          <IoMenu
            onClick={() => setOpen((prev) => !prev)}
            size={30}
            className={"font-medium text-white cursor-pointer"}
          />
        ) : (
          <BsX
            onClick={() => setOpen((prev) => !prev)}
            size={30}
            className={"font-medium text-white cursor-pointer"}
          />
        )}
        {open && (
          <nav
            className={
              "bg-blue-500 h-fit w-fit absolute top-15 right-0 -mx-auto"
            }
          >
            <ul className={"flex flex-col py-5 px-6 space-y-4"}>
              {links.map((link) => {
                return (
                  <Link
                    href={link.route}
                    className={`${
                      pathname === link.route ? "text-red-200" : "text-white"
                    } text-xl font-medium hover:border-b-2`}
                    key={link.id}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
            {session ? (
              <div className="ml-4 flex items-center space-x-4 bg-white p-2 rounded-sm">
                <h1 className="text-black text-xl font-medium">
                  {session.user.name}
                </h1>
                <Button onClick={handleSignout}>Logout</Button>
              </div>
            ) : (
              <div className="ml-4 flex items-center space-x-4 bg-white p-2 rounded-sm">
                <Button onClick={() => router.push("/login")}>Login</Button>
              </div>
            )}
          </nav>
        )}
      </nav>
      {/* Burger Menu End*/}
    </header>
  );
};
export default Header;

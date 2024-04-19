"use client";
import { Hide, Show } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [hide, setHide] = useState<boolean>(false);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName) {
      setHide(["/login", "/register"].includes(pathName));
    }
  }, [pathName]);
  return (
    !hide && (
      <>
        <Show breakpoint="(min-width: 991px)">
          <NavbarDesktop />
        </Show>
        <Hide breakpoint="(min-width: 991px)">
          <NavbarMobile />
        </Hide>
      </>
    )
  );
};

export default Navbar;

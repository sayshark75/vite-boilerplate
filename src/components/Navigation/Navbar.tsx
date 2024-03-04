"use client";
import { Hide, Show } from "@chakra-ui/react";
import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <Show breakpoint="(min-width: 991px)">
        <NavbarDesktop />
      </Show>
      <Hide breakpoint="(min-width: 991px)">
        <NavbarMobile />
      </Hide>
    </>
  );
};

export default Navbar;

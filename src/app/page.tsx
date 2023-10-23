"use client"

import { Heading, getCssText } from "@ignite-ui/react";
import { globalStyles } from "./global"


globalStyles();
export default function Home() {
  return (
    <>
    <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText()}}/> 
   <Heading>HOME</Heading>
    </>
  )
}

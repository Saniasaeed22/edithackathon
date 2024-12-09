import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Recomendcar from "@/components/recomendcar";

export default function Home(){
    return(
        <>
    
        <Hero/>
        <Card/>
        <Recomendcar/>

       </>
    )
}
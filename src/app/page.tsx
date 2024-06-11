"use client"

import CenteredWrapper from "@/components/centered-wrapper"
import AnimatedSlider from "@/components/slider"
import { Heading } from "@radix-ui/themes"
import Image from "next/image"

export default function Home() {
  return (
    <main className="dark h-screen w-full bg-black">
      <div className="flex justify-center py-16">
        <Heading
          size={"9"}
          as="h1"
          className="bg-gradient-to-b from-gray-400 to-gray-500 bg-clip-text text-transparent"
        >
          Radix + Framer Motion
        </Heading>
      </div>

      <CenteredWrapper>
        <Heading as="h3" size={"4"} className="mb-8 font-medium text-zinc-300">
          Volume controller
        </Heading>
      </CenteredWrapper>

      <CenteredWrapper>
        <AnimatedSlider />
      </CenteredWrapper>
    </main>
  )
}

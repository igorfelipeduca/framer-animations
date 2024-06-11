import { Heading } from "@radix-ui/themes"

export default function Header() {
  return (
    <div className="flex h-16 w-full items-center border-b border-zinc-800 bg-black px-16">
      <div className="flex w-full items-center justify-between">
        <Heading as="h4" size={"4"} className="text-zinc-400">
          Framer Animations
        </Heading>

        <div className="flex items-center gap-x-4">
          <a
            href={"https://twitter.com/ducaswtf"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-800 bg-gradient-to-br from-black to-zinc-900/30 px-4 py-2 font-bold text-zinc-400 transition-all duration-150 ease-linear"
          >
            Twitter
          </a>

          <a
            href={"https://twitter.com/ducaswtf"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-800 bg-gradient-to-br from-black to-zinc-900/30 px-4 py-2 font-bold text-zinc-400 transition-all duration-150 ease-linear"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  )
}

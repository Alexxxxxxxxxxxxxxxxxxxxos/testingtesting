"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [showCursor1, setShowCursor1] = useState(true)
  const [showCursor2, setShowCursor2] = useState(false)

  const fullText1 = "goon goon on that coming soon"
  const fullText2 = "website coming on a network near you"

  useEffect(() => {
    let index1 = 0
    let index2 = 0
    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout

    // Type first line
    const typeText1 = () => {
      if (index1 < fullText1.length) {
        setText1(fullText1.slice(0, index1 + 1))
        index1++
        timeout1 = setTimeout(typeText1, 80)
      } else {
        // Start typing second line after first is complete
        setShowCursor1(false)
        setShowCursor2(true)
        timeout2 = setTimeout(typeText2, 500)
      }
    }

    // Type second line
    const typeText2 = () => {
      if (index2 < fullText2.length) {
        setText2(fullText2.slice(0, index2 + 1))
        index2++
        timeout2 = setTimeout(typeText2, 80)
      }
    }

    typeText1()

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-16">
      <div className="text-white text-5xl md:text-6xl lg:text-7xl font-light">
        {text1}
        {showCursor1 && <span className="inline-block w-1 h-[1em] bg-white ml-1 animate-pulse" />}
      </div>
      <div className="text-white text-3xl md:text-4xl lg:text-5xl font-light">
        {text2}
        {showCursor2 && text2.length > 0 && <span className="inline-block w-1 h-[1em] bg-white ml-1 animate-pulse" />}
      </div>
    </main>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Force dark mode on the landing page
    document.documentElement.classList.add("dark")
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-25"
          style={{
            background: "radial-gradient(circle, #0066ff 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-6 md:pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image 
            src="/logo.png" 
            alt="Portfolio Logo" 
            width={160} 
            height={50} 
            className="h-10 md:h-12 w-auto object-contain mx-auto mb-4" 
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Hi, I'm <span className="text-[#0066ff]">Yash</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
              Choose your path to explore my expertise and journey
            </p>
          </div>

          {/* Portfolio Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Web3 Marketer Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 border-2 hover:border-[#0066ff]/30 bg-black/80 backdrop-blur-xl border-white/10 w-full">
              <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0066ff]/20 transition-colors duration-300">
                    <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#0066ff]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                    Web3 Marketer
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    Driving Web3 growth by blending strategy, storytelling, and community magic. 
                    Explore my marketing expertise and successful campaigns.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6 md:mb-8 flex-grow">
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Social Media Growth
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Community Management
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    DeFi & Web3 Expertise
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white py-3 text-sm md:text-base lg:text-lg font-medium transition-all duration-200 hover:scale-105 group-hover:shadow-lg flex-shrink-0"
                  onClick={() => window.location.href = '/marketer'}
                >
                  <span className="truncate">Explore Marketing Portfolio</span>
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                </Button>
              </CardContent>
            </Card>

            {/* Programmer Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 border-2 hover:border-[#0066ff]/30 bg-black/80 backdrop-blur-xl border-white/10 w-full">
              <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0066ff]/20 transition-colors duration-300">
                    <Code className="w-8 h-8 md:w-10 md:h-10 text-[#0066ff]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                    Programmer
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    Building innovative solutions with modern technologies. 
                    Discover my development projects and technical expertise.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6 md:mb-8 flex-grow">
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Full-Stack Development
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Modern Frameworks
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Problem Solving
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-[#0066ff] text-[#0066ff] hover:bg-[#0066ff] hover:text-white py-3 text-sm md:text-base lg:text-lg font-medium transition-all duration-200 hover:scale-105 group-hover:shadow-lg bg-transparent flex-shrink-0"
                  onClick={() => window.location.href = '/programmer'}
                >
                  <span className="truncate">Explore Dev Portfolio</span>
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Yash Portfolio. Choose your journey.
          </p>
        </div>
      </footer>
    </div>
  )
}
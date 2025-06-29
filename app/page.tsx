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
    <div className="h-screen bg-black text-white overflow-hidden flex flex-col">
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
      <header className="relative z-10 pt-6 md:pt-8 pb-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image 
            src="/logo.png" 
            alt="Portfolio Logo" 
            width={160} 
            height={50} 
            className="h-10 md:h-12 w-auto object-contain mx-auto" 
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose your path to explore my expertise and journey
            </p>
          </div>

          {/* Portfolio Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Web3 Marketer Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 border-2 hover:border-[#0066ff]/30 bg-black/80 backdrop-blur-xl border-white/10 w-full">
              <CardContent className="p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-4 md:mb-5 flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0066ff]/20 transition-colors duration-300">
                    <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-[#0066ff]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    Web3 Marketer
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    Driving Web3 growth by blending strategy, storytelling, and community magic.
                  </p>
                </div>
                
                <div className="space-y-2 mb-5 md:mb-6 flex-grow">
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
                  className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white py-2.5 md:py-3 text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 group-hover:shadow-lg flex-shrink-0"
                  onClick={() => window.location.href = '/marketer'}
                >
                  <span className="truncate">Explore Marketing Portfolio</span>
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Button>
              </CardContent>
            </Card>

            {/* Programmer Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 border-2 hover:border-[#0066ff]/30 bg-black/80 backdrop-blur-xl border-white/10 w-full">
              <CardContent className="p-5 md:p-6 text-center h-full flex flex-col">
                <div className="mb-4 md:mb-5 flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0066ff]/20 transition-colors duration-300">
                    <Code className="w-7 h-7 md:w-8 md:h-8 text-[#0066ff]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    Programmer
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    Building innovative solutions with modern technologies and clean code.
                  </p>
                </div>
                
                <div className="space-y-2 mb-5 md:mb-6 flex-grow">
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
                  className="w-full border-2 border-[#0066ff] text-[#0066ff] hover:bg-[#0066ff] hover:text-white py-2.5 md:py-3 text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 group-hover:shadow-lg bg-transparent flex-shrink-0"
                  onClick={() => window.location.href = '/programmer'}
                >
                  <span className="truncate">Explore Dev Portfolio</span>
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 md:py-6 flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Yash Portfolio. Choose your journey.
          </p>
        </div>
      </footer>
    </div>
  )
}
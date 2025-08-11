"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  useEffect(() => {
    // Force dark mode on the landing page
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <div className="h-screen bg-black text-white overflow-hidden flex flex-col dark">
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
      <header className="relative z-10 pt-4 md:pt-6 pb-2 flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image 
            src="/logo.png" 
            alt="Portfolio Logo" 
            width={160} 
            height={50} 
            className="h-8 md:h-10 w-auto object-contain mx-auto" 
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Choose your path to explore my expertise and journey
            </p>
          </div>

          {/* Portfolio Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {/* Web3 Marketer Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 border-2 hover:border-[#0066ff]/30 bg-black/80 backdrop-blur-xl border-white/10 w-full">
              <CardContent className="p-4 md:p-5 text-center h-full flex flex-col">
                <div className="mb-3 md:mb-4 flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-[#0066ff]/20 transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-[#0066ff]" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                    Web3 Marketer
                  </h2>
                </div>
                
                <div className="space-y-1.5 mb-4 md:mb-5 flex-grow">
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Social Media Growth
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Community Management
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    DeFi & Web3 Expertise
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white py-2 md:py-2.5 text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 group-hover:shadow-lg flex-shrink-0"
                  onClick={() => window.location.href = '/marketer'}
                >
                  <span className="truncate">Explore Marketing Portfolio</span>
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                </Button>
              </CardContent>
            </Card>

            {/* Programmer Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 border-2 hover:border-[#0066ff]/30 bg-black/80 backdrop-blur-xl border-white/10 w-full">
              <CardContent className="p-4 md:p-5 text-center h-full flex flex-col">
                <div className="mb-3 md:mb-4 flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-[#0066ff]/20 transition-colors duration-300">
                    <Code className="w-6 h-6 md:w-7 md:h-7 text-[#0066ff]" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                    Programmer
                  </h2>
                </div>
                
                <div className="space-y-1.5 mb-4 md:mb-5 flex-grow">
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Full-Stack Development
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Modern Frameworks
                  </div>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full mr-2 flex-shrink-0"></span>
                    Problem Solving
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white py-2 md:py-2.5 text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 group-hover:shadow-lg flex-shrink-0"
                  onClick={() => window.location.href = '/programmer'}
                >
                  <span className="truncate">Explore Dev Portfolio</span>
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-3 md:py-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Yash Portfolio. Choose your journey.
          </p>
        </div>
      </footer>
    </div>
  )
}
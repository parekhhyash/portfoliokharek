"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Download,
  Mail,
  ArrowUp,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Zap,
  Menu,
  X,
  ArrowLeft,
  ExternalLink,
  Github,
} from "lucide-react"
import Image from "next/image"

// Error boundary wrapper component
function SafeProgrammerPortfolio() {
  try {
    return <ProgrammerPortfolio />
  } catch (error) {
    console.warn("Portfolio render error:", error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio Loading...</h1>
          <p className="text-gray-600">Please refresh the page if this persists.</p>
        </div>
      </div>
    )
  }
}

function ProgrammerPortfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [customCursorEnabled, setCustomCursorEnabled] = useState(false)

  // Safely check if we're in a browser environment
  const isBrowser = typeof window !== "undefined" && typeof document !== "undefined"

  // Ensure component is mounted before accessing window
  useEffect(() => {
    if (!isBrowser) return

    try {
      setMounted(true)

      // Check if device is desktop and enable custom cursor
      const checkIsDesktop = () => {
        try {
          const isDesktopSize = window.innerWidth >= 1024
          setIsDesktop(isDesktopSize)
          setCustomCursorEnabled(isDesktopSize)
        } catch (error) {
          console.warn("Desktop check error:", error)
          setIsDesktop(false)
          setCustomCursorEnabled(false)
        }
      }

      checkIsDesktop()
      window.addEventListener("resize", checkIsDesktop, { passive: true })

      return () => {
        try {
          window.removeEventListener("resize", checkIsDesktop)
        } catch (error) {
          console.warn("Cleanup error:", error)
        }
      }
    } catch (error) {
      console.warn("Mount effect error:", error)
      setMounted(true) // Still set mounted to true to render the component
    }
  }, [isBrowser])

  useEffect(() => {
    if (!mounted || !isBrowser) return

    try {
      const htmlElement = document.documentElement
      if (htmlElement) {
        if (darkMode) {
          htmlElement.classList.add("dark")
        } else {
          htmlElement.classList.remove("dark")
        }
      }
    } catch (error) {
      console.warn("Theme toggle error:", error)
    }
  }, [darkMode, mounted, isBrowser])

  const handleScroll = useCallback(() => {
    if (!isBrowser) return

    try {
      const sections = ["home", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      // Check if we've scrolled past the home section
      const homeSection = document.getElementById("home")
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight
        setShowScrollTop(window.scrollY > homeBottom - 200)
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    } catch (error) {
      console.warn("Scroll handler error:", error)
    }
  }, [isBrowser])

  useEffect(() => {
    if (!mounted || !isBrowser) return

    try {
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => {
        try {
          window.removeEventListener("scroll", handleScroll)
        } catch (error) {
          console.warn("Scroll cleanup error:", error)
        }
      }
    } catch (error) {
      console.warn("Scroll setup error:", error)
    }
  }, [mounted, handleScroll, isBrowser])

  // Custom cursor tracking - only on desktop and when enabled
  useEffect(() => {
    if (!mounted || !customCursorEnabled || !isBrowser) return

    let isActive = true

    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) return
      try {
        setCursorPosition({ x: e.clientX, y: e.clientY })
      } catch (error) {
        console.warn("Mouse move error:", error)
      }
    }

    const handleMouseEnter = () => {
      if (!isActive) return
      try {
        setIsHovering(true)
      } catch (error) {
        console.warn("Mouse enter error:", error)
      }
    }

    const handleMouseLeave = () => {
      if (!isActive) return
      try {
        setIsHovering(false)
      } catch (error) {
        console.warn("Mouse leave error:", error)
      }
    }

    try {
      // Add event listeners to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea')

      document.addEventListener("mousemove", handleMouseMove, { passive: true })

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter, { passive: true })
        el.addEventListener("mouseleave", handleMouseLeave, { passive: true })
      })

      return () => {
        isActive = false
        try {
          document.removeEventListener("mousemove", handleMouseMove)
          interactiveElements.forEach((el) => {
            el.removeEventListener("mouseenter", handleMouseEnter)
            el.removeEventListener("mouseleave", handleMouseLeave)
          })
        } catch (error) {
          console.warn("Cursor cleanup error:", error)
        }
      }
    } catch (error) {
      console.warn("Cursor setup error:", error)
    }
  }, [mounted, customCursorEnabled, isBrowser])

  const scrollToTop = useCallback(() => {
    if (!isBrowser) return
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      console.warn("Scroll to top error:", error)
    }
  }, [isBrowser])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (!isBrowser) return
      try {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } catch (error) {
        console.warn("Scroll to section error:", error)
      }
    },
    [isBrowser],
  )

  const skills = [
    { name: "Frontend Development", icon: Globe, description: "React, Next.js, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: Server, description: "Node.js, Express, Python, REST APIs" },
    { name: "Database Management", icon: Database, description: "PostgreSQL, MongoDB, Redis, Supabase" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, iOS/Android" },
    { name: "DevOps & Cloud", icon: Zap, description: "AWS, Docker, CI/CD, Kubernetes" },
    { name: "Programming Languages", icon: Code, description: "JavaScript, TypeScript, Python, Java" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, message encryption, and multimedia support.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Python", "OpenAI", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with data visualization, reporting, and real-time metrics.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ]

  const experience = [
    {
      company: "Senior Full-Stack Developer",
      role: "TechCorp Solutions",
      duration: "2023 - Present",
      description:
        "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      company: "Frontend Developer",
      role: "StartupXYZ",
      duration: "2021 - 2023",
      description:
        "Built responsive web applications and mobile apps. Improved performance by 40% and implemented modern development practices.",
      technologies: ["Vue.js", "React Native", "Firebase", "TypeScript"],
    },
    {
      company: "Junior Developer",
      role: "DevAgency",
      duration: "2020 - 2021",
      description:
        "Developed client websites and web applications. Collaborated with design teams to implement pixel-perfect interfaces.",
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
    },
  ]

  // Social media icons using custom SVG
  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

  const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )

  const EmailIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Custom Cursor - Only on Desktop */}
      {customCursorEnabled && (
        <div
          className="fixed top-0 left-0 w-6 h-6 bg-transparent border-2 border-[#0066ff] rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out"
          style={{
            transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px) ${
              isHovering ? "scale(1.5)" : "scale(1)"
            }`,
            borderColor: isHovering ? "#0052cc" : "#0066ff",
          }}
        />
      )}

      {/* Floating Navbar - Always Visible */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200/20 dark:border-white/10 rounded-2xl px-6 py-3 shadow-2xl shadow-black/10 dark:shadow-black/30 w-[calc(100vw-2rem)] md:w-auto md:min-w-[750px] max-w-4xl">
          <div className="flex items-center justify-between">
            {/* Back Button + Logo */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-300 hidden sm:inline">Back</span>
              </button>
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
              >
                <Image src="/logo.png" alt="Portfolio Logo" width={120} height={32} className="h-8 w-auto object-contain" />
              </button>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              {["home", "skills", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg text-sm font-medium ${
                    activeSection === section
                      ? "text-[#0066ff] bg-[#0066ff]/10"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#0066ff] hover:bg-gray-100/50 dark:hover:bg-white/5"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Desktop Dark Mode Toggle - Right */}
            <div className="hidden md:block">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-gray-100/50 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-gray-100/50 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-white/20 transition-all duration-200"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-gray-100/50 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-white/20 transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100 mt-4 pt-4 border-t border-gray-200/20 dark:border-white/10" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-2">
              {["home", "skills", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl capitalize transition-all duration-200 text-sm font-medium ${
                    activeSection === section
                      ? "text-[#0066ff] bg-[#0066ff]/10"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#0066ff] hover:bg-gray-100/50 dark:hover:bg-white/5"
                  }`}
                >
                  {section}
                </button>
              ))}

              {/* Mobile Social Icons */}
              <div className="pt-4 border-t border-gray-200/20 dark:border-white/10 mt-4">
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://linkedin.com/in/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100/50 dark:bg-white/10 rounded-xl hover:bg-[#0066ff] hover:text-white transition-colors duration-200"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://twitter.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100/50 dark:bg-white/10 rounded-xl hover:bg-[#0066ff] hover:text-white transition-colors duration-200"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="mailto:example@email.com"
                    className="p-2 bg-gray-100/50 dark:bg-white/10 rounded-xl hover:bg-[#0066ff] hover:text-white transition-colors duration-200"
                  >
                    <EmailIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black pt-20"
      >
        {/* Light mode blue glow effect - only visible in light mode */}
        <div className="absolute inset-0 block dark:hidden">
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-15"
            style={{
              background: "radial-gradient(circle, #0066ff 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* Dark mode blue glow effect - only visible in dark mode */}
        <div className="absolute inset-0 hidden dark:block">
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-25"
            style={{
              background: "radial-gradient(circle, #0066ff 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-[#0066ff]">Yash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Building innovative solutions with modern technologies and clean, efficient code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#0066ff] hover:bg-[#0052cc] text-white border-2 border-[#0066ff] hover:border-[#0052cc] py-3 text-lg font-medium transition-all duration-200 hover:scale-105 h-14 w-48 flex items-center justify-center shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>Contact Me</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-white/30 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:text-white dark:hover:border-white/50 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 w-48 flex items-center justify-center h-14 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and frameworks I use to build amazing applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-gray-200 dark:border-[#1f1f22] bg-white dark:bg-[#0f0f10]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-[#0066ff]/10 rounded-lg mr-4 group-hover:bg-[#0066ff]/20 transition-colors duration-300">
                        <IconComponent className="h-6 w-6 text-[#0066ff]" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Some of the projects I've built and contributed to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 dark:border-[#1f1f22] bg-white dark:bg-[#0a0a0a] overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-[#0066ff]/10 text-[#0066ff] hover:bg-[#0066ff]/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#0066ff] hover:text-[#0052cc] transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and career highlights
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#0066ff]"></div>
              {experience.map((job, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  <div className="absolute left-6 w-4 h-4 bg-[#0066ff] rounded-full border-4 border-white dark:border-[#0a0a0a]"></div>
                  <div className="ml-20">
                    <Card className="hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-[#1f1f22] bg-white dark:bg-[#0f0f10]">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                          <Badge className="bg-[#0066ff]/10 text-[#0066ff] hover:bg-[#0066ff]/20 w-fit mt-2 md:mt-0">
                            {job.duration}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-medium text-[#0066ff] mb-3">{job.company}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 dark:bg-[#0a0a0a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's build something together</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
            <Button
              size="lg"
              className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1f1f22] rounded-full hover:bg-[#0066ff] transition-colors duration-200"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1f1f22] rounded-full hover:bg-[#0066ff] transition-colors duration-200"
            >
              <TwitterIcon />
            </a>
            <a
              href="mailto:example@email.com"
              className="p-3 bg-[#1f1f22] rounded-full hover:bg-[#0066ff] transition-colors duration-200"
            >
              <EmailIcon />
            </a>
          </div>

          <div className="text-center text-gray-400 border-t border-[#1f1f22] pt-8">
            <p>&copy; {new Date().getFullYear()} Yash Portfolio - Full-Stack Developer. All rights reserved.</p>
          </div>
        </div>

        {/* Scroll to Top Button - Only visible after Home section */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-[#0066ff] text-white rounded-full shadow-lg hover:bg-[#0052cc] transition-all duration-200 hover:scale-110 animate-fade-in-up"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </footer>
    </div>
  )
}

export default SafeProgrammerPortfolio
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
import gsap from "gsap"
import { useEffect, useState } from "react"

import {Dock, Home, Navbar , Welcome, LoadingScreen, DesktopEntrance} from "#components"
import { Contact, Finder, ImageContent, Photos, Resume, Safari, Terminal, Text, ArchiveWindow, AchievementPDF } from "#windows"
import useThemeStore from "#store/theme"

const App = () => {
  const {isDarkMode, lightBg, darkBg} = useThemeStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const bgImage = isDarkMode ? darkBg : lightBg
    document.body.style.backgroundImage = `url('${bgImage}')`
  }, [isDarkMode, lightBg, darkBg])

  useEffect(() => {
    // Loading screen duration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      {isLoading && (
        <LoadingScreen 
          onComplete={() => {
            setIsLoading(false)
          }} 
        />
      )}
      
      <DesktopEntrance isVisible={!isLoading}>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageContent />
        <Contact />
        <Photos />
        <ArchiveWindow />
        <AchievementPDF />

        <Home />
      </DesktopEntrance>
    </main>
  )
}

export default App
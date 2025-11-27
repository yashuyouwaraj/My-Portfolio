import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
import gsap from "gsap"
import { useEffect } from "react"

import {Dock, Home, Navbar , Welcome} from "#components"
import { Contact, Finder, ImageContent, Photos, Resume, Safari, Terminal, Text, ArchiveWindow, AchievementPDF } from "#windows"
import useThemeStore from "#store/theme"

const App = () => {
  const {isDarkMode, lightBg, darkBg} = useThemeStore()

  useEffect(() => {
    const bgImage = isDarkMode ? darkBg : lightBg
    document.body.style.backgroundImage = `url('${bgImage}')`
  }, [isDarkMode, lightBg, darkBg])

  return (
    <main>
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
    </main>
  )
}

export default App
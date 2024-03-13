import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import GlobalStyle, { Container } from './styles'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

function App() {
  const [isThemeDark, setIsThemeDark] = useState(false)

  function toggleTheme() {
    setIsThemeDark(!isThemeDark)
  }

  return (
    <ThemeProvider theme={isThemeDark ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import './assets/style/style.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import { LanguageProvider } from './LanguageContext.jsx'
import './style/style.css';


const App = () => {
  return (
    <LanguageProvider>
      <Header/>
      <Main/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App
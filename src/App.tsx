import './App.css'
import './crt.css'
import Header from './components/Header'
import BackgroundClouds from './components/Background'
import Description from './components/Description'
import Mediagallery from './components/Mediagallery'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'




function App() {

  function playMouseClick() {
    const audio = new Audio("/Mouse_Click.wav");
    audio.play()
  }

  window.addEventListener("mousedown", playMouseClick)

  return (
    <div className='crt'>
      
      <div className='crt-content'>
        <audio autoPlay loop>
          <source src='/AtmoSFX.wav'/>
        </audio>

        <BackgroundClouds />
        <Header />
        <section id="system32ID"className='titleVideo'>
          <img src="Cover.png" id='picture' alt="System 32 Cover Picture" />
          <video autoPlay loop>
             <source src="GameplayCompressed.mp4" type="video/mp4"></source>
          </video>

        </section>

        <Description />

        <Mediagallery />

        <AboutUs />

        <Footer />      
      </div>

    </div>
  )
}

export default App

import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import GenerateBase64Image from '../components/GenerateBase64Image'
import ContactForm from '../components/ContactForm'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Generate Business Card</h1>
      <p className="mt-4">
        Fill the form to generate QRCode and Image
      </p>
      <div className="mt-8">
        <ContactForm/>
        <GenerateBase64Image/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Index

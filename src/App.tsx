import { useState } from 'react'
import './App.css'

export default function App() {
  // include all the characters and numbers in the password

  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(10)

  function generatePassword () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setPassword(password)
  }

  function handlePasswordLength(value: number) {
    setPasswordLength(value)
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="password">
        <h2>{password}</h2>
        <button onClick={() => {
          generatePassword()
        }}>Generate Password</button>
        </div>
      <div className="length">
        <label htmlFor="length">Password Length</label>
        <input type="number" value={passwordLength} onChange={(e) => handlePasswordLength(e.target.value)} />
      </div>
    </div>
  )
}


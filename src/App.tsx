import { useState } from 'react'
import './App.css'

export default function App() {
  // include all the characters and numbers in the password

  const [email, setEmail] = useState('')
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

  function generateEmail(){
    // email should be in this format - email@email.com
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let email = ''
    for (let i = 0; i < 10; i++) {
      email += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    email += '@'
    let domain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
    let randomDomain = domain[Math.floor(Math.random() * domain.length)]
    email += randomDomain
    setEmail(email)
  }

  function handlePasswordLength(value: number) {
    setPasswordLength(value)
  }

  function handleCopyPassword() {
    navigator.clipboard.writeText(password)
  }

  function handleCopyEmail(){
    navigator.clipboard.writeText(email)
  }

  return (
    <div className="App">
      <h1>Email Generator</h1>
      <div className="email">
        <h2>{email}</h2>
        <button onClick={() => {
          generateEmail()
        }}>Generate Email</button>
        <button onClick={handleCopyEmail}>Copy Email</button>
      </div>
      <h1>Password Generator</h1>
      <div className="password">
        <h2>{password}</h2>
        <button onClick={() => {
          generatePassword()
        }}>Generate Password</button>
        <button onClick={handleCopyPassword}>Copy Password</button>
      </div>
      <div className="length">
        <label htmlFor="length">Password Length</label>
        <input type="number" value={passwordLength} onChange={(e) => handlePasswordLength(e.target.value)} />
      </div>
    </div>
  )
}


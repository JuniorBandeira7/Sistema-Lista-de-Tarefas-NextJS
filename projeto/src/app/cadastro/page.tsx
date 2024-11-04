"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "../components/Button"

export default function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleSignUp = () => {
    console.log("Cadastrar")
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-white text-3xl mb-6">Cadastrar</h1>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 rounded bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="mb-4 p-2 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          className="mb-4 p-2 rounded bg-gray-700 text-white"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleSignUp} className="mb-2">Cadastrar</Button>
      </div>
    </div>
  )
}

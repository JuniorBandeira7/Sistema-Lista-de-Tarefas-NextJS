"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Lógica de login aqui
    console.log("Login");
};

const handleRegister = () => {
    // Lógica de cadastro aqui
    console.log("Cadastrar");
};

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg w-96">
            <h1 className="text-white text-3xl mb-6">Login</h1>
            <input
                type="email"
                placeholder="Email"
                className="mb-4 p-2 rounded bg-gray-700 text-white"
            />
            <input
                type="password"
                placeholder="Senha"
                className="mb-4 p-2 rounded bg-gray-700 text-white"
            />
            <Button onClick={handleLogin} className="mb-2">Entrar</Button>
            <Button onClick={handleRegister}>Cadastrar</Button>
        </div>
    </div>
  );
}
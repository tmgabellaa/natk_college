"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (login === "1" && password === "1") {
      router.push("/home");
    } else {
      alert("Неверные данные!");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Авторизация
        </h2>
        <Input type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
        <div className="my-3"></div>
        <Input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="mt-6">
          <Button text="Войти" onClick={handleLogin} className="w-full" />
        </div>
      </div>
    </div>
  );
}

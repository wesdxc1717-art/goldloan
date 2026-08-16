"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직
    alert("로그인 시도");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-xl font-bold text-gray-800">
          관리자 로그인
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#C9A227]"
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#C9A227]"
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-[#C9A227] py-3 text-sm font-bold text-white hover:bg-[#b08e20] transition-colors"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        {/* Code */}
        <h1 className="text-9xl font-extrabold text-gray-300 select-none">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Ôi không! Trang bạn tìm không tồn tại.
        </h2>

        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Có thể đường dẫn đã bị đổi hoặc bạn đã nhập sai URL.
          Hãy quay trở lại trang chủ nhé!
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="
            inline-flex mt-8 px-6 py-3 rounded-xl
            bg-black text-white font-medium 
            hover:bg-gray-900 active:scale-[0.98]
            transition-all duration-200
          "
        >
          Quay lại trang chủ
        </Link>

        {/* Decoration circle */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-black/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </div>
  );
}

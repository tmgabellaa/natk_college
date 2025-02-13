import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Логотип и текст */}
      <div className="flex items-center space-x-3">
        {/* Логотип с фоном, чтобы был виден на синем фоне */}
        <div className="bg-white p-1 rounded-full">
          <Image src="/logo.png" alt="Логотип" width={40} height={40} className="rounded-full" />
        </div>
        <h1 className="text-xl font-bold text-white drop-shadow-md">Система Колледжа</h1>
      </div>
      {/* Кнопка выхода */}
      <Link href="/login">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Выйти
        </button>
      </Link>
    </header>
  );
}

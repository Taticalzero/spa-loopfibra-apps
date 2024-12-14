'use client'

import { useEffect, useState } from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export default function AppDownload() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    const userAgent: string = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";

    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=br.com.app.loopfibra";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !("MSStream" in window)) {
      window.location.href = "https://apps.apple.com/br/app/loop-fibra/id1659028442";
    } else {
      setShowLinks(true);
    }

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Loop Fibra App</h1>
      {showLinks ? (
        <>
          <p className="mb-6 text-gray-600">Escolha a loja para baixar o app:</p>
          <div className="space-y-4">
            <StoreButton
              href="https://apps.apple.com/br/app/loop-fibra/id1659028442"
              icon={<FaApple className="w-6 h-6" />}
              text="Baixar na App Store"
              className="bg-black hover:bg-gray-800"
            />
            <StoreButton
              href="https://play.google.com/store/apps/details?id=br.com.app.loopfibra"
              icon={<FaGooglePlay className="w-6 h-6" />}
              text="Baixar no Google Play"
              className="bg-blue-600 hover:bg-blue-700"
            />
          </div>
        </>
      ) : (
        <p className="text-gray-600">Redirecionando para a loja do seu dispositivo...</p>
      )}
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-gray-600">Carregando...</p>
    </div>
  )
}

function StoreButton({ href, icon, text, className }: { href: string; icon: React.ReactNode; text: string; className: string }) {
  return (
    <a
      href={href}
      className={`flex items-center justify-center px-6 py-3 rounded-full text-white transition-colors duration-300 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  )
}


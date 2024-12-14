import AppDownload from '@/components/AppDownload'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Baixe o App Loop Fibra',
  description: 'Faça o download do aplicativo Loop Fibra para iOS e Android',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <AppDownload />
    </main>
  )
}

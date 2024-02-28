import Image from 'next/image'

export default function Home() {
  console.log('Hello, server!')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Space is big, and you need a guide</h2>
    </main>
  )
}

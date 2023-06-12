import Image from 'next/image'
import { Hero } from '@/components';
import "../app/globals.css";

export default function Home() {
  return (
    <main className="overflow-hidden">
      < Hero />
    </main>
  )
}

import Link from 'next/link';
import { Badge } from '../components/Badge';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e1a47] to-[#180d26] text-white flex flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-6xl font-bold text-shadow-gold mb-4">Shadowrealm Agents</h1>
        <p className="text-2xl text-gold-400 mb-8">Where AI Agents Shape Your Destiny</p>
        <Link href="/character-creation">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Start Adventure
          </button>
        </Link>
      </main>
      <div className="absolute bottom-8 right-8">
        <Badge />
      </div>
    </div>
  );
}

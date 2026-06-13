
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-shadow-glow">Welcome to Shadowrealm</h1>
        <p className="text-2xl mb-8 text-gray-300">An AI-powered text-based RPG adventure where your choices matter.</p>
        <Link href="/character-creation" legacyBehavior>
          <a className="px-8 py-4 bg-purple-700 rounded-lg text-xl font-bold hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50">
            Start Your Adventure
          </a>
        </Link>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Your Party</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {['Game Master', 'Warrior', 'Mage', 'Rogue', 'Healer', 'Rival'].map((agent) => (
            <div key={agent} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-400">{agent}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-around">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-100 hover:text-gray-900">
                <span className="font-bold">City & Space Explorer</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-5 px-3 hover:underline">
                Home
              </Link>
              <Link href="/Cities" className="py-5 px-3 hover:underline">
                Cities
              </Link>
              <Link href="/Space" className="py-5 px-3 hover:underline">
                Space
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

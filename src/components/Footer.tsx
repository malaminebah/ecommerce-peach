import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Apple Store Clone. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 
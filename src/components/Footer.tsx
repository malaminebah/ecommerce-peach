import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Colonne 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Acheter</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/mac" className="text-sm text-gray-600 hover:text-gray-900">
                  Mac
                </Link>
              </li>
              <li>
                <Link href="/ipad" className="text-sm text-gray-600 hover:text-gray-900">
                  iPad
                </Link>
              </li>
              <li>
                <Link href="/iphone" className="text-sm text-gray-600 hover:text-gray-900">
                  iPhone
                </Link>
              </li>
              <li>
                <Link href="/watch" className="text-sm text-gray-600 hover:text-gray-900">
                  Watch
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/apple-music" className="text-sm text-gray-600 hover:text-gray-900">
                  Apple Music
                </Link>
              </li>
              <li>
                <Link href="/apple-tv" className="text-sm text-gray-600 hover:text-gray-900">
                  Apple TV+
                </Link>
              </li>
              <li>
                <Link href="/icloud" className="text-sm text-gray-600 hover:text-gray-900">
                  iCloud
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">À propos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  Notre entreprise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  Carrières
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-sm text-gray-600 hover:text-gray-900">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              Copyright © {new Date().getFullYear()} Apple Store Clone. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/sitemap" className="text-xs text-gray-500 hover:text-gray-900">
                Plan du site
              </Link>
              <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-900">
                Cookies
              </Link>
              <select 
                className="text-xs text-gray-500 bg-transparent border-none focus:ring-0 cursor-pointer"
                defaultValue="FR"
              >
                <option value="FR">France</option>
                <option value="EN">United States</option>
                <option value="DE">Deutschland</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
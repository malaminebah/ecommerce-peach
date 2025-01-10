'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      {session ? (
        <button
          onClick={() => signOut()}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Déconnexion ({session.user?.email})
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Connexion
        </button>
      )}
    </div>
  );
} 
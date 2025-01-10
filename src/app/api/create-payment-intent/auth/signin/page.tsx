import { signIn } from "next-auth/react"

export default function SignIn() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        await signIn("credentials", {
            username: formData.get("email"),
            password: formData.get("password"),
            redirect: true,
            callbackUrl: "/",
        })
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Connexion</h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="johndoe@example.com" 
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Mot de passe
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder="••••••••" 
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
                >
                    Se connecter
                </button>
            </div>
        </form>
    )
}
export default function AuthErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <h1 className="text-2xl font-bold">Authentication Error</h1>
                <p className="mt-2 text-gray-600">
                    { "Something went wrong during sign in."}
                </p>
            </div>
        </div>
    );
}

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-2 text-gray-500">This page could not be found.</p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-black text-white rounded-[5px] hover:opacity-90 transition-opacity"
            >
                Go back to home
            </Link>
        </div>
    );
}

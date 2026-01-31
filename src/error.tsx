"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">Something went wrong</h1>

            <p className="mt-2 text-red-500">
                {error.message}
            </p>

            <button
                onClick={reset}
                className="mt-6 px-4 py-2 bg-black text-white rounded"
            >
                Try again
            </button>
        </div>
    );
}

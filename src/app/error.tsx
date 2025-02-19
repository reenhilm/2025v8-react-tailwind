"use client"

interface ErrorProps {
    error: Error;
}

export default function Error({ error }: ErrorProps) {
    return (
        <div>
            <p>Error loading page...</p>
            <p>{error.message}</p>
        </div>
    );
}

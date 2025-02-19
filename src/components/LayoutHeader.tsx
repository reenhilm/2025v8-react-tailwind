import Link from "next/link";

export default function LayoutHeader() {
    return (
        <>
            <header>
                <Link href="/">Home</Link> | <Link href="/receipts">Receipts</Link>
            </header>
        </>
    );
}
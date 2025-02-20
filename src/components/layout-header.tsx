import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function LayoutHeader() {
    return (
        <>
            <header>
                <Link href="/">Home</Link> | <Link href="/receipts">Receipts</Link>
                <ModeToggle />
            </header>
        </>
    );
}
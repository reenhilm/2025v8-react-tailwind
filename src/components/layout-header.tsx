import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function LayoutHeader() {
    return (
        <>
            <h1 className="text-3xl col-start-1 col-end-3">ReceiptDB</h1>
            <nav className="col-start-3 -col-end-2 flex justify-end items-center h-5 min-h-10">
                <Link href="/" className="mx-1 py-1 px-3 font-semibold uppercase">Home</Link>
                <Link href="/receipts" className="mx-1 py-1 px-3 font-semibold uppercase">Receipts</Link>
                <ModeToggle />
            </nav>            
        </>
    );
}
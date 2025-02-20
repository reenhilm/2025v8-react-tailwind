import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function LayoutHeader() {
    return (
        <>
            <nav className="col-start-1 -col-end-2 flex justify-end items-center h-5 min-h-10">
                <Link href="/" className="mx-1 py-1 px-3 font-semibold uppercase">Home</Link>
                <Link href="/receipts" className="mx-1 py-1 px-3 font-semibold uppercase">Receipts</Link>
            </nav>
            <div className="-col-start-2 -col-end-1 min-h-10 flex items-center">
                <ModeToggle />
            </div>            
            <h1 className="text-3xl">ReceiptDB</h1>
        </>
    );
}
"use server"
import { fetchReceiptsByCategory } from "@/actions";
import ReceiptToast from "@/components/receipt-toast";
import Link from "next/link";
//todo make interface for searchParams
export default async function Receipts(
    {
        searchParams,
    }: {
        searchParams: Promise<{ [key: string]: string | undefined }>;
    }

) {
    const { categoryname = "Household" } = await searchParams;
    const data = await fetchReceiptsByCategory(categoryname);

    return (
        <>
            <h2 className="text-xl">
                Search for receipts                
            </h2>
            <ReceiptToast />
            <section>
                Receipt list for {categoryname}

                <ul className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4">
                    {data.map((receipt) => (
                        <li key={receipt.id}>
                            <Link href={`/receipt/${receipt.id}`}>
                                <h3>{receipt.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

import { fetchReceipt } from "@/actions";
import { Receipt } from "@/interfaces";

export default async function EditReceipt({ params }: { params: Promise<{ id: string }>; }) {
    
    //since params is a promise we have to await it first
    const { id } = await params;
    const data: Receipt | undefined = await fetchReceipt(id);

    if (data === undefined) {
        throw new Error(`Could not find receipt with id ${id}`);
    }

    return (
        <>
            <section>
                Receipt Details
                {data.id}
                {data.title}
            </section>
        </>
    );
}

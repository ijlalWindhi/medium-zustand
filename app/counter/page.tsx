'use client';
import { useCountStore } from './_store';
import usePersistStore from "@/helpers/usePersistStore";

export default function Page() {
    // Or, we can fetch what we need from the store
    
    // remark below if you don't want to use persist store
    // const { count, decrease, increase } = useCountStore((state) => state);

    const store = usePersistStore(useCountStore, (state) => state);

    return (
        <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1>
                Counter <span>{store?.count}</span>
            </h1>

            <div className="flex gap-2">
                <button onClick={store?.increase} className="border border-white p-1.5 font-medium rounded-md">
                Increase
                </button>
                <button onClick={store?.decrease} className="border border-white p-1.5 font-medium rounded-md">
                Decrease
                </button>
            </div>
        </main>
    );
}

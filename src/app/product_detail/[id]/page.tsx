import { notFound } from "next/navigation";
import ProductClient from "../components/ProductDetail";

async function getProduct(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products?id=${id}`, { cache: "no-store" });
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    if (!product) {
        notFound();
    }

    return <ProductClient product={product} />;
}

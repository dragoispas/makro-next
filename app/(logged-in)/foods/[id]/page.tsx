import { ProductCard } from "@/components/diary/diary-drawer/form/product-card";

interface Props {
    params: { id: number };
}

const FoodPage = async ({ params: { id } }: Props) => {

    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    const product = await res.json();

    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="w-104">
                    <ProductCard selectedProduct={product}></ProductCard>
                </div>
            </div>

        </div>
    );
}

export default FoodPage;
import { mockProducts } from "@/app/mockData";
import { ProductCard } from "@/components/diary/diary-drawer/form/product-card";

interface Props {
    params: { id: number };
}

const FoodPage = ({ params: { id } }: Props) => {
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="w-104">
                    <ProductCard selectedProduct={mockProducts[id]}></ProductCard>
                </div>
            </div>

        </div>
    );
}

export default FoodPage;
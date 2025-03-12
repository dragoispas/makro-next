import { mockProducts } from "@/app/mockData";
import CreateFoodForm from "@/components/foods/create/create-food-form";

interface Props {
    searchParams: { productId: number }
}

export default function CreateFoodPage({ searchParams: { productId } }: Props) {

    return (
        <div>
            <h1>Create Food</h1>
            {productId !== undefined ? (
                <p>Initializing from product ID: {productId}</p>
            ) : (
                <p>Creating new food</p>
            )}
            <CreateFoodForm product={productId !== undefined ? mockProducts[productId - 1] : undefined} />
        </div>
    );
}

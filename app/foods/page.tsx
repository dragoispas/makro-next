import { ProductsTable } from "@/components/foods/foods-table/products-table";

const FoodsPage = async () => {
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();
    return (
        <div>
            <div className="container mx-auto py-10">
                <ProductsTable products={products} />
            </div>
        </div>
    );
}

export default FoodsPage;
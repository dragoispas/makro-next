import { DiaryTable } from "@/components/diary/dary-table/data-table";
import { mockFoodEntries } from "../mockData";
import { ProductsTable } from "@/components/foods/foods-table/products.table";

const FoodsPage = () => {
    return (
        <div>
            <div className="container mx-auto py-10">
                <ProductsTable />
            </div>

        </div>
    );
}

export default FoodsPage;
import { DiaryTable } from "@/components/data-table-demo/data-table";
import { mockFoodEntries } from "../mockData";

const FoodsPage = () => {
    return (
        <div>
            <div className="container mx-auto py-10">
                <DiaryTable data={mockFoodEntries} />
            </div>

        </div>
    );
}

export default FoodsPage;
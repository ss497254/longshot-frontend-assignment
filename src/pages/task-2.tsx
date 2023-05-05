import { DndList } from "src/components/Task2/DndList";
import { CloseIcon } from "src/icons";

function Task2() {
    return (
        <div className="h-full bg-gray-50 c flex-c">
            <div className="p-6 bg-white border rounded w-96">
                <div className="justify-between mb-3 text-lg font-semibold f">
                    Edit Outlines
                    <CloseIcon className="text-pink-500" />
                </div>
                <div className="my-2 text-sm text-gray-500">Outlines</div>
                <DndList />
                <button className="items-center w-full px-3 py-2 mt-2 text-sm font-medium border rounded text-violet-600 border-violet-600 f">
                    <CloseIcon className="mr-2 rotate-45" size={14} /> Add
                    outline
                </button>
            </div>
        </div>
    );
}

export default Task2;

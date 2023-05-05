import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DragIcon } from "src/icons";

const defaultList = [
    "Shopping in Barcelona",
    "Famous Shopping Streets",
    "Shopping malls",
    "Markets",
    "Opening times",
    "Sales Tax Refunds",
    "You may also be interested in",
    "Where to Stay",
];

interface DndListProps {}

export const DndList: React.FC<DndListProps> = () => {
    const [itemList, setItemList] = useState(defaultList);

    return (
        <DragDropContext
            onDragEnd={(droppedItem) => {
                if (!droppedItem.destination) return;

                var updatedList = [...itemList];
                const [reorderedItem] = updatedList.splice(
                    droppedItem.source.index,
                    1
                );

                updatedList.splice(
                    droppedItem.destination.index,
                    0,
                    reorderedItem
                );

                setItemList(updatedList);
            }}
        >
            <Droppable droppableId="droppable-list">
                {(provided) => (
                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                        {itemList.map((item, idx) => {
                            return (
                                <Draggable
                                    key={idx}
                                    draggableId={idx.toString()}
                                    index={idx}
                                >
                                    {(provided) => (
                                        <li
                                            className="w-full px-3 f justify-between py-2.5 rounded bg-slate-200"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {item}
                                            <DragIcon
                                                size={24}
                                                className="stroke-gray-600"
                                            />
                                        </li>
                                    )}
                                </Draggable>
                            );
                        })}

                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

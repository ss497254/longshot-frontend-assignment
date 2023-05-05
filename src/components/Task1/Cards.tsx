import React from "react";
import { Card } from "src/ui/Card";
import { CircularProgress } from "src/ui/CircularProgress";

interface CardsProps {}

export const Cards: React.FC<CardsProps> = () => {
    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <Card className="row-span-3">
                Volume
                <h3>480 🇺🇸</h3>
                <hr className="my-3 w-[92%] mx-auto" />
                Keyword Difficulty
                <h3 className="mt-1 f">
                    46%
                    <CircularProgress className="ml-5" size={40} value={0.46} />
                </h3>
                <div className="mb-1 -mt-2 text-gray-700">Possible</div>
                <p className="text-sm text-gray-600">
                    Slightly more competition. You'll need well-structured and
                    unique content appropriately optimized for your keywords.
                </p>
            </Card>
            <Card>
                keyword
                <div className="px-4 text-sm text-yellow-700 py-0.5 my-1 bg-yellow-200 rounded-full w-fit">
                    Commercial
                </div>
            </Card>
            <Card>
                Results
                <h3>313M</h3>
            </Card>
            <Card className="grid grid-cols-2">
                <div>
                    CPC
                    <h3>$0.12</h3>
                </div>
                <div>
                    Com.
                    <h3>0.24</h3>
                </div>
            </Card>
        </div>
    );
};

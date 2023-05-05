import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <>
            <section className="h-screen bg-blue-500 c">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="relative mx-auto max-w-[850px] overflow-hidden rounded-lg bg-white py-20 px-8 text-center shadow-lg sm:px-12 md:px-[60px]">
                                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] xl:text-[42px]">
                                    404 - We couldn't find that page.
                                </h2>
                                <h3 className="mb-8 text-xl font-normal text-gray-700 md:text-2xl">
                                    Maybe the page has been moved out?
                                </h3>
                                <Link href="/">
                                    <button className="px-8 py-2.5 font-semibold text-blue-700 bg-blue-100 border border-blue-300 rounded-md hover:bg-blue-500 hover:text-white">
                                        Go back
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

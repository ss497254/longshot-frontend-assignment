import { SideBar } from "src/components/SideBar";
import { Cards } from "src/components/Task1/Cards";
import { Header } from "src/components/Task1/Header";
import { Table } from "src/components/Task1/Table";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 f">
            <SideBar />
            <div className="w-full px-8 py-2">
                <Header />
                <hr className="my-3" />
                <div className="max-w-2xl mx-auto">
                    <Cards />
                    <Table />
                </div>
            </div>
        </main>
    );
}

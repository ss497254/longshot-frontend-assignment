import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 f">
            <Link href="/task-1">Task 1</Link>
            <Link href="/task-2">Task 2</Link>
        </main>
    );
}

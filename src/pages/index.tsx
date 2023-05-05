import Link from "next/link";
import { Card } from "src/ui/Card";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 f">
            <div className="max-w-2xl mx-auto my-16">
                <p className="text-lg text-center">
                    <strong className="text-3xl text-violet-600">
                        Hi, I'm Saurabh Singh
                    </strong>
                    , a skilled Full Stack Web Developer with 2 years of
                    experience using technologies such as{" "}
                    <strong>
                        Next.js, React.js, Node.js, React Native, Golang,
                        Docker, Nginx, and AWS
                    </strong>
                    . I'm a pre-final year undergraduate student pursuing a
                    Bachelor's degree in{" "}
                    <strong>
                        Computer Science and Engineering from IIT Dhanbad
                    </strong>
                    .
                </p>
                <h1 className="my-8">My work.</h1>
                <div className="space-x-4 f">
                    <Link href="/task-1">
                        <Card className="w-full p-6 cursor-pointer hover:underline">
                            <h3>Task 1</h3>
                            Mock the following UI, by using the data (data.json)
                            provided with the assignment.
                        </Card>
                    </Link>
                    <Link href="/task-2">
                        <Card className="w-full p-6 cursor-pointer hover:underline">
                            <h3>Task 2</h3>
                            Develop Drag and drop functionality.
                        </Card>
                    </Link>
                </div>
            </div>
        </main>
    );
}

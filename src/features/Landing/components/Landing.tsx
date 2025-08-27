import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center">
            <AspectRatio ratio={16 / 9} className="w-full max-w-md rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Ecommerce Store</h1>
                    <Button
                        asChild
                        className="bg-blue-500 text-white hover:bg-blue-600"
                    >
                        <Link to='/'>Go to Store</Link>
                    </Button>
                </div>
            </AspectRatio>
        </div>
    );
}

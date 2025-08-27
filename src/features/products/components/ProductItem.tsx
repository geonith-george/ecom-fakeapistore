import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/components/cartSlice";
import { toast } from "sonner"
import { motion } from "framer-motion"

function ProductItem({ product }) {
    const dispatch = useDispatch();

    return (
        <motion.div
            key={product.id}
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" }}
            className="h-full w-full"
        >
            <Card className="flex flex-col rounded-2xl overflow-hidden shadow-md transition-all duration-300">
                {/* Image Section */}
                <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                    <motion.img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Content */}
                <CardContent className="p-4 space-y-2 flex-grow">
                    <h4 className="text-md font-semibold line-clamp-1">
                        {product.title}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                        {product.description}
                    </p>
                    <p className="text-md font-bold">${product.price}</p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-4 pt-0">
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Button
                            className="w-full"
                            onClick={() => {
                                dispatch(addToCart(product));
                                toast(`${product.title} added to cart`);
                            }}
                        >
                            Add to Cart
                        </Button>
                    </motion.div>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export default ProductItem;

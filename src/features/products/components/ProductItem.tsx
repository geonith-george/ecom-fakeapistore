import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/components/cartSlice";
import { toast } from "sonner"

function ProductItem({product}:any) {

    const dispatch = useDispatch()

    return (<>
        <Card
            key={product.id}
            className="h-full w-full flex flex-col rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            {/* Image Section */}
            <div className="w-full h-32 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <CardContent className="p-4 space-y-2 flex-grow">
                <h3 className="text-lg font-semibold line-clamp-1">
                    {product.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                    {product.description}
                </p>
                <p className="text-xl font-bold">${product.price}</p>
            </CardContent>

            {/* Footer */}
            <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={()=>{ dispatch(addToCart(product)); toast(`${product.title} added to cart`)}}>Add to Cart</Button>
            </CardFooter>
        </Card>
    </>);
}

export default ProductItem;
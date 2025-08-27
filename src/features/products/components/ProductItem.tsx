import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/components/cartSlice";
import { toast } from "sonner";
import { motion } from "framer-motion";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="w-full flex flex-col"
    >
      <Card className="rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
        {/* Image */}
        <div className="w-full h-48 flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <CardContent className="p-3 flex flex-col flex-grow">
          <h4 className="text-sm font-semibold line-clamp-2">
            {product.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
          <p className="text-sm font-bold mt-2">${product.price}</p>
        </CardContent>

        {/* Footer Button */}
        <CardFooter className="p-3 pt-0">
          <motion.div whileTap={{ scale: 0.95 }} className="w-full">
            <Button
              className="w-full text-sm py-2 rounded-lg "
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
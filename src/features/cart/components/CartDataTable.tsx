import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "./cartSlice";
import { toast } from "sonner"



const CartDataTable = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  return (
   <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                className="mt-4"
                onClick={() => {
                  dispatch(removeCartItem(item));
                  toast(`${item.title} removed from cart`);
                }}
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-3 border rounded-lg p-4 shadow mt-4 flex justify-between items-center font-semibold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </>
      ) : (
        <p className="col-span-full text-center text-gray-500">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartDataTable;


import CartDataTable from "@/features/cart/components/CartDataTable";
import { addToCart } from "@/features/cart/components/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {

    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();

    return (<>
        <CartDataTable />
    </>);
}

export default CartPage;
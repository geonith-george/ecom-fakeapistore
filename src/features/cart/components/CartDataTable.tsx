import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "./cartSlice";
import { toast } from "sonner"



const CartDataTable = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button variant="destructive" size="sm" onClick={() => { dispatch(removeCartItem(item)); toast(`${item.title} removed from cart`)}}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      {cart.length > 0
        ?
        <div className="border p-2 flex ">
          <p>Total : {cart.reduce((acc: any, cur: any) => acc + cur.price, 0)} </p>
        </div> : <p className="p-2 flex"> Your cart is empty</p>}

    </div>
  );
};

export default CartDataTable;

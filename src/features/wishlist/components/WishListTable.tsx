import { Button } from "@/components/ui/button";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  addedDate: string;
}

const dummyWishlist: WishlistItem[] = [
  { id: 1, name: "MacBook Pro", price: 1299.99, addedDate: "2025-08-20" },
  { id: 2, name: "Wireless Headphones", price: 199.95, addedDate: "2025-08-22" },
  { id: 3, name: "Gaming Chair", price: 349.5, addedDate: "2025-08-24" },
];

const WishlistTable = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {dummyWishlist.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-sm"
        >
          <div className="flex flex-col">
            <span className="font-semibold">{item.name}</span>
            <span className="text-gray-500 sm:hidden">${item.price.toFixed(2)}</span>
            <span className="text-gray-400 text-sm sm:hidden">Added: {item.addedDate}</span>
          </div>
          <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <span>${item.price.toFixed(2)}</span>
            <span className="text-gray-400 text-sm">Added: {item.addedDate}</span>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <Button size="sm">Move to Cart</Button>
            <Button size="sm" variant="destructive">
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistTable;

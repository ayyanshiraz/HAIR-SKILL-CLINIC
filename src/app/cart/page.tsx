import CartClient from "../../components/CartClient";

export default function CartPage() {
  // In a real application, you might fetch this data from a database or session here
  const initialCartItems = [
    {
      id: 1,
      name: "Premium Swiss Lace Unit",
      price: 299,
      quantity: 1,
      image: "/images/placeholder-1.jpg"
    },
    {
      id: 2,
      name: "Ultra Thin Poly Skin",
      price: 249,
      quantity: 2,
      image: "/images/placeholder-2.jpg"
    }
  ];

  return <CartClient initialItems={initialCartItems} />;
}
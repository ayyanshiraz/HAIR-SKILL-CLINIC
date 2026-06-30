import CheckoutClient from "../../components/CheckoutClient";

export default function CheckoutPage() {
  
  const cartSummary = {
    subtotal: 797.00,
    taxAmount: 39.85,
    deliveryCharge: 15.00,
    finalTotal: 851.85
  };

  return <CheckoutClient cartSummary={cartSummary} />;
}
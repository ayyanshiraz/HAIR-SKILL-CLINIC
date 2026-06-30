import HairUnitClient from "../../components/HairUnitClient";

export default function HairUnitPage() {
  
  const hairUnits = [
    {
      id: 1,
      name: `Premium Swiss Lace Unit`,
      price: 299,
      description: `Breathable and undetectable base for a completely natural look.`,
      specs: [
        `Ultra thin Swiss lace`,
        `Invisible natural hairline`,
        `100 percent premium human hair`,
        `Medium light hair density`
      ],
      image: `/images/placeholder-1.jpg`
    },
    {
      id: 2,
      name: `Ultra Thin Poly Skin`,
      price: 249,
      description: `Seamless skin base that is easy to attach clean and maintain.`,
      specs: [
        `Translucent 0.03mm poly base`,
        `V looped hair for natural growth look`,
        `100 percent premium human hair`,
        `Perfect for tight styles`
      ],
      image: `/images/placeholder-2.jpg`
    },
    {
      id: 3,
      name: `Mono Base with Poly Perimeter`,
      price: 279,
      description: `The perfect balance of durability and comfort for active lifestyles.`,
      specs: [
        `Durable fine monofilament top`,
        `Easy clean poly coating around edges`,
        `Long lasting construction`,
        `Medium to medium heavy density`
      ],
      image: `/images/placeholder-3.jpg`
    },
    {
      id: 4,
      name: `French Lace Front Unit`,
      price: 269,
      description: `Stronger lace material that still provides an excellent front hairline.`,
      specs: [
        `Durable French lace material`,
        `Reinforced stitching`,
        `Breathable top section`,
        `Graduated front hairline`
      ],
      image: `/images/placeholder-4.jpg`
    }
  ];

  return <HairUnitClient hairUnits={hairUnits} />;
}
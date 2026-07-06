import HairUnitClient from "../../components/HairUnitClient";

export default function HairUnitPage() {
  const hairUnits = [
    {
      id: 1,
      name: `USA`,
      price: 22000,
      description: `High quality standard unit designed for everyday wear and durability.`,
      specs: [
        `Standard base`,
        `Natural look`,
        `Durable construction`,
        `Reliable hold`
      ],
      image: `/images/placeholder-1.jpg`
    },
    {
      id: 2,
      name: `FRONT LACE`,
      price: 30000,
      description: `Premium front lace system for an undetectable natural hairline.`,
      specs: [
        `Natural hairline`,
        `Breathable lace front`,
        `Premium hair quality`,
        `Seamless blend`
      ],
      image: `/images/placeholder-2.jpg`
    },
    {
      id: 3,
      name: `MGM`,
      price: 35000,
      description: `Advanced MGM hair unit offering excellent comfort and styling flexibility.`,
      specs: [
        `Comfortable fit`,
        `Flexible styling`,
        `Long lasting`,
        `High density options`
      ],
      image: `/images/placeholder-3.jpg`
    },
    {
      id: 4,
      name: `SWISS LESS`,
      price: 38000,
      description: `Ultra fine base system for the most natural and breathable experience.`,
      specs: [
        `Ultra fine material`,
        `Maximum breathability`,
        `Feather light feel`,
        `Undetectable finish`
      ],
      image: `/images/placeholder-4.jpg`
    },
    {
      id: 5,
      name: `AUSTRALIAN`,
      price: 38000,
      description: `Durable Australian grade hair system built for active lifestyles.`,
      specs: [
        `High durability`,
        `Active lifestyle ready`,
        `Secure fit`,
        `Strong base`
      ],
      image: `/images/placeholder-1.jpg`
    },
    {
      id: 6,
      name: `GOLDEN MIRAGE`,
      price: 35000,
      description: `Premium Golden Mirage unit with an exceptionally natural flow and texture.`,
      specs: [
        `Natural flow`,
        `Premium texture`,
        `Lightweight base`,
        `Excellent color match`
      ],
      image: `/images/placeholder-2.jpg`
    },
    {
      id: 7,
      name: `ICON`,
      price: 45000,
      description: `The Icon system delivers top tier aesthetic appeal and uncompromised quality.`,
      specs: [
        `Top tier aesthetics`,
        `Premium build`,
        `Superior comfort`,
        `Luxurious feel`
      ],
      image: `/images/placeholder-3.jpg`
    },
    {
      id: 8,
      name: `Q6`,
      price: 55000,
      description: `Advanced Q6 base offering the perfect hybrid of durability and natural appearance.`,
      specs: [
        `Hybrid base`,
        `Exceptional realism`,
        `High comfort level`,
        `Easy maintenance`
      ],
      image: `/images/placeholder-4.jpg`
    },
    {
      id: 9,
      name: `FULL HEAD GENTS`,
      price: 80000,
      description: `Complete full head coverage designed specifically for gentlemen.`,
      specs: [
        `Full coverage`,
        `Custom contoured`,
        `Maximum density control`,
        `Tailored fit`
      ],
      image: `/images/placeholder-1.jpg`
    },
    {
      id: 10,
      name: `FULL HEAD LADIES`,
      price: 90000,
      description: `Comprehensive full head system for ladies featuring gorgeous length and volume.`,
      specs: [
        `Full coverage`,
        `Premium length`,
        `Natural volume`,
        `Styling versatility`
      ],
      image: `/images/placeholder-2.jpg`
    },
    {
      id: 11,
      name: `HALF HEAD LADIES`,
      price: 50000,
      description: `Half head integration system designed to blend flawlessly with existing hair.`,
      specs: [
        `Seamless integration`,
        `Targeted coverage`,
        `Lightweight`,
        `Natural transition`
      ],
      image: `/images/placeholder-3.jpg`
    },
    {
      id: 12,
      name: `ULTRA LIGHT`,
      price: 50000,
      description: `Extremely lightweight and breathable system for maximum scalp comfort.`,
      specs: [
        `Feather light feel`,
        `Maximum airflow`,
        `Delicate base`,
        `Barely there sensation`
      ],
      image: `/images/placeholder-4.jpg`
    },
    {
      id: 13,
      name: `FRONT LINE GENTS`,
      price: 25000,
      description: `Targeted front line restoration for gentlemen. Prices range up to 35000 based on specific requirements.`,
      specs: [
        `Frontal coverage`,
        `Restored hairline`,
        `Customizable density`,
        `Graduated front`
      ],
      image: `/images/placeholder-1.jpg`
    }
  ];

  return <HairUnitClient hairUnits={hairUnits} />;
}
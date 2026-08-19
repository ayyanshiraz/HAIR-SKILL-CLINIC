import type { Metadata } from "next";
import HairUnitClient from "../../components/HairUnitClient";

export const metadata: Metadata = {
  title: "Hair Units & Non-Surgical Wigs in Lahore | Hair Skill",
  description: "Discover premium hair units, non-surgical hair systems, and wig care products in Lahore. Browse our collection of front lace patches, tapes, and solvents.",
  keywords: [
    "Hair Units Lahore",
    "Non Surgical Hair System",
    "Mens Hair Wigs Lahore",
    "Hair Patches Lahore",
    "Wig Tapes and Glues",
    "Hair Skill Clinic Lahore"
  ],
  alternates: {
    canonical: "https://www.hairskill.com/hair-unit",
  },
  openGraph: {
    title: "Hair Units & Non-Surgical Wigs in Lahore | Hair Skill",
    description: "Discover premium hair units, non-surgical hair systems, and wig care products in Lahore. Browse our collection of front lace patches, tapes, and solvents.",
    url: "https://www.hairskill.com/hair-unit",
    siteName: "Hair Skill Clinic",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://www.hairskill.com/hairunit/frontlace.webp",
        width: 1200,
        height: 630,
        alt: "Premium Front Lace Hair Unit and Non-Surgical Hair Systems at Hair Skill Clinic Lahore",
      },
    ],
  },
};

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
      image: `/hairunit/usaa.webp`
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
      image: `/hairunit/frontlace.webp`
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
      image: `/hairunit/mgm.webp`
    },
    {
      id: 4,
      name: `SWISS LACE`,
      price: 38000,
      description: `Ultra fine base system for the most natural and breathable experience.`,
      specs: [
        `Ultra fine material`,
        `Maximum breathability`,
        `Feather light feel`,
        `Undetectable finish`
      ],
      image: `/hairunit/swisslace.webp`
    },
    {
      id: 5,
      name: `AUSTRALIAN`,
      price: 35000,
      description: `Durable Australian grade hair system built for active lifestyles.`,
      specs: [
        `High durability`,
        `Active lifestyle ready`,
        `Secure fit`,
        `Strong base`
      ],
      image: `/hairunit/australian.webp`
    },
    {
      id: 6,
      name: `GOLDEN MIRAGE`,
      price: 40000,
      description: `Premium Golden Mirage unit with an exceptionally natural flow and texture.`,
      specs: [
        `Natural flow`,
        `Premium texture`,
        `Lightweight base`,
        `Excellent color match`
      ],
      image: `/hairunit/golden-mirage.webp`
    },
    {
      id: 7,
      name: `ULTRA LIGHT ICON`,
      price: 45000,
      description: `The Ultra Light Icon system delivers top tier aesthetic appeal and uncompromised quality.`,
      specs: [
        `Top tier aesthetics`,
        `Premium build`,
        `Superior comfort`,
        `Luxurious feel`
      ],
      image: `/hairunit/ultralight-icon.webp`
    },
    {
      id: 8,
      name: `ULTRA LIGHT Q6`,
      price: 55000,
      description: `Advanced Ultra Light Q6 base offering the perfect hybrid of durability and natural appearance.`,
      specs: [
        `Hybrid base`,
        `Exceptional realism`,
        `High comfort level`,
        `Easy maintenance`
      ],
      image: `/hairunit/q6.webp`
    },
    {
      id: 9,
      name: `FULL HEAD GENTS`,
      price: 55000,
      description: `Complete full head coverage designed specifically for gentlemen.`,
      specs: [
        `Full coverage`,
        `Custom contoured`,
        `Maximum density control`,
        `Tailored fit`
      ],
      image: `/hairunit/full-head-gents.webp`
    },
    {
      id: 10,
      name: `FULL HEAD LADIES`,
      price: 85000,
      description: `Comprehensive full head system for ladies featuring gorgeous length and volume.`,
      specs: [
        `Full coverage`,
        `Premium length`,
        `Natural volume`,
        `Styling versatility`
      ],
      image: `/hairunit/full-head-ladies.webp`
    },
    {
      id: 11,
      name: `HALF HEAD LADIES`,
      price: 40000,
      description: `Half head integration system designed to blend flawlessly with existing hair.`,
      specs: [
        `Seamless integration`,
        `Targeted coverage`,
        `Lightweight`,
        `Natural transition`
      ],
      image: `/hairunit/ladies-half-head.webp`
    },
    {
      id: 13,
      name: `FRONT LINE GENTS`,
      price: 15000,
      priceDisplay: `15,000 - 25,000`,
      description: `Targeted front line restoration for gentlemen. Prices range up to 25000 based on specific requirements.`,
      specs: [
        `Frontal coverage`,
        `Restored hairline`,
        `Customizable density`,
        `Graduated front`
      ],
      image: `/hairunit/front-line.webp`
    },
    {
      id: 14,
      name: `MONOLACE`,
      price: 55000,
      description: `Premium Monolace unit offering exceptional durability and a highly natural hairline.`,
      specs: [
        `Monofilament base`,
        `High durability`,
        `Natural appearance`,
        `Breathable design`
      ],
      image: `/hairunit/monolace.webp`
    },
    {
      id: 15,
      name: `H1`,
      price: 35000,
      description: `Standard H1 hair system providing reliable hold and easy daily maintenance.`,
      specs: [
        `Standard fit`,
        `Reliable hold`,
        `Easy maintenance`,
        `Everyday wear`
      ],
      image: `/hairunit/h1.webp`
    },
    {
      id: 16,
      name: `POLYTHIN`,
      price: 50000,
      description: `Ultra thin polyurethane base that seamlessly blends with your natural skin tone.`,
      specs: [
        `Poly thin base`,
        `Seamless blend`,
        `Skin match technology`,
        `Secure fit`
      ],
      image: `/hairunit/polythin.webp`
    },
    {
      id: 17,
      name: `AUSTRALIAN MIRAGE`,
      price: 45000,
      description: `Premium Australian Mirage unit designed for an active lifestyle with a flawless look.`,
      specs: [
        `Active lifestyle design`,
        `Flawless integration`,
        `High density`,
        `Strong base`
      ],
      image: `/hairunit/australian-mirage.webp`
    },
    {
      id: 18,
      name: `USA APOLO`,
      price: 20000,
      description: `Cost effective USA Apolo unit providing standard coverage and reliable performance.`,
      specs: [
        `Cost effective`,
        `Standard coverage`,
        `Reliable performance`,
        `Classic style`
      ],
      image: `/hairunit/usa apolo.webp`
    }
  ];

  const hairCareProducts = [
    { id: 101, name: `WIDE TOOTH COMB`, price: 149, priceDisplay: `149 - 249`, description: `Wide tooth comb designed specifically for safe hair wig detangling and daily care.`, specs: [`Gentle on hair systems`, `Prevents shedding`, `Durable material`, `Easy styling`], image: `/products/1.webp` },
    { id: 102, name: `TRUE TAPE SAS SOLVENT`, price: 4999, priceDisplay: `4,999 - 9,999`, description: `Super adhesive remover solvent by True Tape for quick and safe cleanup.`, specs: [`Fast acting formula`, `Skin safe`, `Leaves no residue`, `Easy application`], image: `/products/2.webp` },
    { id: 103, name: `WALKER ULTRA-HOLD TAPE`, price: 3899, priceDisplay: `3,899 - 12,999`, description: `Walker Tape Ultra-Hold tape roll providing maximum secure hold for hair systems.`, specs: [`Maximum hold`, `Waterproof`, `Long lasting`, `Flexible`], image: `/products/3.webp` },
    { id: 104, name: `WALKER GERMAN BROWN TAPE`, price: 5799, priceDisplay: `5,799 - 13,999`, description: `German Brown hair system tape by Walker Tape for reliable attachment.`, specs: [`Strong adhesion`, `Easy to peel`, `Secure fit`, `Professional grade`], image: `/products/3.webp` },
    { id: 105, name: `ULTRA HOLD MINI TABS`, price: 3999, description: `Walkers Ultra Hold Mini Tabs double-sided tape for quick touch-ups.`, specs: [`Convenient size`, `Double sided`, `Ultra strong hold`, `Travel friendly`], image: `/products/4.webp` },
    { id: 106, name: `ORS OLIVE OIL SHEEN SPRAY`, price: 1099, description: `Nourishing sheen spray infused with olive oil for a natural healthy glow.`, specs: [`Adds natural shine`, `Nourishing formula`, `Lightweight`, `Pleasant scent`], image: `/products/5.webp` },
    { id: 107, name: `YARDLIE SHINING SPRAY`, price: 1499, description: `Yardlie hair shining spray 350ml for a vibrant and lustrous finish.`, specs: [`High shine`, `Non greasy`, `Long lasting glow`, `Large 350ml bottle`], image: `/products/6.webp` },
    { id: 108, name: `SABALON HAIRSPRAY`, price: 1199, description: `Sabalon hairspray formulated for perfect hairstyling and strong hold.`, specs: [`Strong hold styling`, `Flake free`, `Humidity resistant`, `Easy to wash out`], image: `/products/7.webp` },
    { id: 109, name: `NEW FLEX SHAMPOO`, price: 2199, description: `New Flex Shampoo 473ml designed to clean and protect your hair units.`, specs: [`Deep cleansing`, `Safe for hair systems`, `Maintains moisture`, `Large capacity`], image: `/products/8.webp` },
    { id: 110, name: `FLEX PROTEIN CONDITIONER`, price: 2199, description: `Flex Protein Conditioner 473ml to keep hair systems soft and manageable.`, specs: [`Protein enriched`, `Detangling`, `Restores softness`, `Safe for daily use`], image: `/products/9.webp` },
    { id: 111, name: `WALKER SCALP PROTECTOR`, price: 8499, description: `Scalp protector by Walker Tape specially formulated for oily and moist skin.`, specs: [`Creates protective barrier`, `Improves adhesion`, `Great for oily skin`, `Prevents irritation`], image: `/products/10.webp` },
    { id: 112, name: `RED TAPE ROLL`, price: 3799, priceDisplay: `3,799 - 7,799`, description: `Super value red tape roll for hair wigs and toupees offering reliable daily wear.`, specs: [`Daily wear tape`, `Easy cleanup`, `Value size roll`, `Low residue`], image: `/products/11.webp` },
    { id: 113, name: `BLUE LACE FRONT TAPE`, price: 4499, priceDisplay: `4,499 - 18,499`, description: `Blue lace front tape roll specifically designed for delicate lace systems.`, specs: [`Matte finish`, `Strong hold`, `Safe for lace`, `No shine`], image: `/products/12.webp` },
    { id: 114, name: `NO SHINE YELLOW TAPE`, price: 4349, priceDisplay: `4,349 - 18,999`, description: `No shine yellow tape roll by Walker Tape for an undetectable matte finish.`, specs: [`Undetectable finish`, `Maximum hold`, `Hypoallergenic`, `Matte effect`], image: `/products/13.webp` },
    { id: 115, name: `SENSI-TAK RED TAPE`, price: 899, priceDisplay: `899 - 8,999`, description: `Sensi-Tak red tape roll for hair systems providing low residue cleanup.`, specs: [`Low residue`, `Easy to clean`, `Gentle on poly bases`, `Secure attachment`], image: `/products/14.webp` },
    { id: 116, name: `LACE RELEASE SPRAY`, price: 3999, description: `Lace release 4oz spray bottle by Walker Tape to safely detach lace units.`, specs: [`Protects delicate lace`, `Fast releasing`, `Reduces cleanup time`, `Safe on skin`], image: `/products/15.webp` },
    { id: 117, name: `GREAT WHITE SOFT BOND`, price: 13999, description: `Walker Great White soft bond adhesive for poly and lace systems.`, specs: [`Water based`, `Non stringy`, `Strong holding power`, `Bacteria resistant`], image: `/products/16.webp` },
    { id: 118, name: `WALKER ULTRA HOLD GLUE`, price: 6499, priceDisplay: `6,499 - 23,499`, description: `Walker Ultra Hold Glue hair system adhesive for an incredibly secure extended wear.`, specs: [`Extended wear`, `Acrylic waterproof`, `Clear drying`, `Maximum security`], image: `/products/17.webp` },
    { id: 119, name: `TOP PRIORITY BOND`, price: 4649, priceDisplay: `4,649 - 7,799`, description: `Top priority hair bond adhesive for secure attachment of wigs and units.`, specs: [`Reliable bond`, `Quick drying`, `Secure hold`, `Professional quality`], image: `/products/18.webp` },
    { id: 120, name: `GHOST BOND XL`, price: 6499, description: `Ghost Bond XL water-resistant hair wig glue for heavy perspiration and oily scalps.`, specs: [`Water resistant`, `Invisible bond`, `Great for oily scalps`, `High temperature safe`], image: `/products/19.webp` },
    { id: 121, name: `C-22 SOLVENT`, price: 6299, priceDisplay: `6,299 - 14,999`, description: `C-22 Solvent for fast and effective removal of wigs and lace systems.`, specs: [`Citrus based`, `Fastest acting`, `Skin safe`, `Pleasant scent`], image: `/products/20.webp` },
    { id: 122, name: `LACE FRONT TAPE STRIPS`, price: 699, priceDisplay: `699 - 999`, description: `Lace front wig support tape strips pack of 10 for quick applications.`, specs: [`Pre cut strips`, `Easy to apply`, `Matte finish`, `Convenient pack`], image: `/products/21.webp` },
    { id: 123, name: `WIG HOLDING CLIPS`, price: 499, description: `Clips for hair wig attachment providing an easy temporary hold.`, specs: [`Snap clip design`, `Secure grip`, `Easy to sew`, `Durable metal`], image: `/products/22.webp` },
    { id: 124, name: `GERMAN TAPE`, price: 2999, description: `German tape for attachment of hair wigs and patches offering a strong secure bond.`, specs: [`Strong bond`, `Reliable hold`, `Flexible material`, `Easy removal`], image: `/products/23.webp` },
    { id: 125, name: `EXTENDA-BOND PLUS`, price: 649, description: `Extenda-Bond Plus tape strips for hair systems featuring breathable holes.`, specs: [`Breathable holes`, `Extra long hold`, `Skin safe`, `Easy to place`], image: `/products/24.webp` }
  ];

  return <HairUnitClient hairUnits={hairUnits} hairCareProducts={hairCareProducts} />;
}
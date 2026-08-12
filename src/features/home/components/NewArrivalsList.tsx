// Components;
import { Container } from "@/shared/components";
import ProductCard from "@/shared/components/ProductCard";

// Static Images;
import pic1 from "@images/home/pic1.png";
import pic2 from "@images/home/pic2.png";
import pic3 from "@images/home/pic3.png";
import pic4 from "@images/home/pic4.png";

// Static Data;
const products = [
  {
    id: 1,
    image: pic1,
    name: "T-shirt with Tape Details",
    rating: 4.5,
    price: 29,
  },
  {
    id: 2,
    image: pic2,
    name: "Skinny Fit Jeans",
    rating: 4.2,
    price: 45,
  },
  {
    id: 3,
    image: pic3,
    name: "Checkerd Shirt",
    rating: 4.8,
    price: 79,
  },
  {
    id: 4,
    image: pic4,
    name: "Sleeve Striped T-shirt",
    rating: 4.6,
    price: 65,
  },
];

export default function NewArrivalsList() {
  return (
    <Container>
      <section className="py-10 sm:py-16">
        <h1 className="font-IntegralCF mb-2 text-center text-[32px] font-bold sm:text-[48px]">
          NEW ARRIVALS
        </h1>

        <div className="hide-scrollbar flex items-center justify-between gap-3 overflow-x-auto py-4">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <button className="xs:w-50 mx-auto mt-1 block w-full cursor-pointer rounded-full border border-black/10 py-2 text-base">
          Veiw All
        </button>
      </section>
      <hr className="border border-black/5" />
    </Container>
  );
}

import Banner from '@/components/Banner';
import { BestSales } from '@/components/BestSales';
import { bestSellers } from '@/data/products';

export default function Home() {
  return (
    <div>
      <Banner />
      <BestSales products={bestSellers} />
    </div>
  );
}

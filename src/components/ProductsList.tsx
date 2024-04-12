"use client"

import SingleProduct from "@/components/SingleProduct";

type Props = {
  products: any[];
}

function ProductsList({ products }: Props) {
  return (
    <div className="flex flex-row flex-wrap justify-around gap-1 md:gap-6 lg:gap-8 mt-12">
      { products?.map((product: any, index: number) => <SingleProduct key={index} product={product} />) }
    </div>
  );
}

export default ProductsList;
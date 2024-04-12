"use client"

import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/outline";

type Props = {
  product: any;
}

function SingleProduct({ product }: Props) {

  return (
    <div key={product.objectId}
         className="relative flex flex-col overflow-hidden rounded-lg border shadow-md w-auto md:w-80 mb-6 hover:cursor-pointer">
      <div className="bg-gray-200 md:h-80 flex items-center justify-center p-8 hover:opacity-70">
        <img src='/heart.png' alt="product" className="h-auto w-full"/>
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <span className="text-black font-semibold text-md">{product.name}</span>
        <span className="text-gray-600 font-medium text-sm">{product.description}</span>
      </div>
      <div className="px-4 py-2 mt-auto">
        <span className="text-black font-semibold mt-4">${product.price}</span>
      </div>

      <Link href={`/products/${product.objectId}/edit`}
            className="absolute top-2 right-2 rounded-full w-10 h-10 bg-white flex items-center justify-center hover:bg-black/10">
        <PencilIcon className="w-4 h-4 text-black"/>
      </Link>
    </div>
  );
}

export default SingleProduct;
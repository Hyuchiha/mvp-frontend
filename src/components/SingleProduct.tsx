"use client"

import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ConfirmationModal from "@/components/ConfirmModal";
import HttpClient from "@/lib/axios/httpClient";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsPagination } from "@/lib/redux/selectors/products.selector";
import { getProducts } from "@/lib/redux/actions/products.actions";
import Loader from "@/components/Loader";
import { showLoader } from "@/lib/redux/actions/global.actions";
import { useRouter } from "next/navigation";

type Props = {
  product: any;
}

function SingleProduct({ product }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);

  const pagination = useSelector(selectProductsPagination)
  const dispatch = useDispatch();

  const router = useRouter();

  const removeElement = async () => {
    setShowConfirm(false);

    dispatch(showLoader());

    try {

      await HttpClient.delete(`/products/${product.objectId}`);

      dispatch(getProducts(pagination?.current, pagination?.limit));

    } catch (err) {
      console.log("Error removing element", err);
    }
  }


  return (
    <>
      <div
        key={product.objectId}
        className="relative flex flex-col overflow-hidden rounded-lg border shadow-md w-auto md:w-80 mb-6 hover:cursor-pointer"
        onClick={() => router.push(`/products/${product.objectId}`)}
      >
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

        <button onClick={(event) => {
          event.stopPropagation();
          router.push(`/products/${product.objectId}/edit`)
        }}
              className="absolute top-2 right-2 rounded-full w-10 h-10 bg-white flex items-center justify-center hover:bg-black/10">
          <PencilIcon className="w-4 h-4 text-black"/>
        </button>

        <button
          type="button"
          className="absolute top-[calc(16px_+_40px)] right-2 rounded-full w-10 h-10 bg-white flex items-center justify-center hover:bg-black/10"
          onClick={(event) => {
            event.stopPropagation();
            setShowConfirm(true);
          } }
        >
          <TrashIcon className="w-4 h-4 text-black"/>
        </button>
      </div>

      <ConfirmationModal isOpen={showConfirm} message={"Estas seguro de querer eliminar este elemento"} onConfirm={() => removeElement()} onCancel={() => setShowConfirm(false)} />
    </>
  );
}

export default SingleProduct;
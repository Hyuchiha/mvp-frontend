"use client"

import Header from "@/components/Header";
import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ProductsList from "@/components/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsList,
  selectProductsLoading,
  selectProductsPagination
} from "@/lib/redux/selectors/products.selector";
import { useEffect } from "react";
import { getProducts } from "@/lib/redux/actions/products.actions";
import Loader from "@/components/Loader";

type Props = {
  page: number,
  limit: number,
}

function Products({ page, limit }: Props) {
  const loading = useSelector(selectProductsLoading);
  const pagination: any = useSelector(selectProductsPagination);
  const products = useSelector(selectProductsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(page, limit));
  }, [page, limit]);

  return (
    <>
      {/*  Header*/}
      <Header title={`Productos disponibles (${pagination?.documentCount || 0 })`} >
        <Link href={`/products/create`} className="top-2 right-2 rounded-full px-3 gap-2 w-auto h-10 bg-white flex items-center justify-center hover:bg-black/5">
          <PlusCircleIcon className="w-6 h-6 text-black" />

          <span className="text-black text-sm font-semibold">Agregar producto</span>
        </Link>
      </Header>

      <ProductsList products={products} />

      {loading && (
        <div className="text-center w-full flex justify-center items-center py-8">
          <div
            className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-green-500 border-t-transparent"
          />
        </div>
      )}
    </>
  )
}

export default Products;
"use client"

import FormProduct from "@/components/FormProduct";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HttpClient from "@/lib/axios/httpClient";
import Loader from "@/components/Loader";

function createProduct() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (newValues: any) => {
    setLoading(true);

    try {
      await HttpClient.post('/products', newValues);

      router.replace('/');
    } catch (err) {
      console.log("Error creating post", err);
    }

    setLoading(false);
  }

  return (
    <div className="bg-white mt-6 p-8 rounded-lg border overflow-hidden shadow-md">
      <FormProduct onSubmit={onSubmit}/>

      { loading && <Loader /> }
    </div>
  );
}

export default createProduct;
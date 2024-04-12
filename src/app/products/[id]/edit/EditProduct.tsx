"use client"

import { useRouter } from "next/navigation";
import FormProduct from "@/components/FormProduct";
import { useEffect, useMemo, useState } from "react";
import HttpClient from "@/lib/axios/httpClient";
import Loader from "@/components/Loader";

type Props = {
  prodId: string;
}

function UpdateProduct({ prodId }: Props) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>({});

  const initialData = useMemo(() => {
    if (!product) {
      return { name: '', description: '', price: 0, category: '' };
    }
    const { name, description, price, category } = product;

    return {
      name,
      description,
      price,
      category: category?.objectId,
    };
  }, [ product ]);

  const router = useRouter();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setLoading(true);

    try {
      const response = await HttpClient.get(`/products/${prodId}`);
      setProduct(response.data);
    } catch (err) {
      console.log("Error getting post", err);
    }

    setLoading(false);
  }

  const onSubmit = async (newValues: any) => {
    setLoading(true);
    try {
      await HttpClient.put(`/products/${prodId}`, newValues);

      router.replace('/');
    } catch (err) {
      console.log("Error creating post", err);
    }
    console.log("Submit", newValues)

    setLoading(false);
  }

  return (
    <div className="bg-white mt-6 p-8 rounded-lg border overflow-hidden shadow-md">
      { !loading || Object.keys(product)?.length > 0 ? <FormProduct onSubmit={onSubmit} initialValues={initialData} /> : null }

      { loading && <Loader /> }
    </div>
  );
}

export default UpdateProduct;
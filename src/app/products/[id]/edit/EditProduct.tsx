"use client"

import { useRouter } from "next/navigation";
import FormProduct from "@/components/FormProduct";
import { useEffect, useMemo, useState } from "react";

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
      const response = await fetch(`http://localhost:3000/v1/products/${prodId}`);

      if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }


      const fetchedProduct =  await response.json();
      setProduct(fetchedProduct);
    } catch (err) {
      console.log("Error getting post", err);
    }

    setLoading(false);
  }

  const onSubmit = async (newValues: any) => {
    try {
      const response = await fetch(`http://localhost:3000/v1/products/${prodId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newValues),
      });

      router.replace('/');
    } catch (err) {
      console.log("Error creating post", err);
    }
    console.log("Submit", newValues)
  }

  return (
    <div className="bg-white mt-6 p-8 rounded-lg border overflow-hidden shadow-md">
      { !loading && product ? <FormProduct onSubmit={onSubmit} initialValues={initialData} /> : null }
    </div>
  );
}

export default UpdateProduct;
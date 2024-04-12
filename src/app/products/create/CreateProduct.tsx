"use client"

import FormProduct from "@/components/FormProduct";
import { useRouter } from "next/navigation";

function createProduct() {
  const router = useRouter();

  const onSubmit = async (newValues: any) => {
    try {
      const response = await fetch('http://localhost:3000/v1/products', {
        method: 'POST',
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
      <FormProduct onSubmit={onSubmit}/>
    </div>
  );
}

export default createProduct;
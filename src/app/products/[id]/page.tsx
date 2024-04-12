import Header from "@/components/Header";
import HttpClient from "@/lib/axios/httpClient";
import SingleProduct from "@/components/SingleProduct";

type Props = {
  params: {
    id: string
  }
}

const getData = async (prodId: string) => {
  try {
    const response = await HttpClient.get(`/products/${prodId}`);

    return response.data;
  } catch (err) {
    console.log("Error getting product", err);
  }
  return null;
}

export default async function DetailPage({ params }: Props ) {
  const product = await getData(params.id);

  return (
    <main className="w-full px-12">
      <Header title="Detalle de producto" />

      <div className="flex justify-center py-12">

        <SingleProduct product={product} />

      </div>
    </main>
  )
}
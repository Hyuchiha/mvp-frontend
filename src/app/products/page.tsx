import ProductsList from "@/components/ProductsList";
import Header from "@/components/Header";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function getProducts(page: number, limit: number) {
  const queryParams = {
    page,
    limit,
  };

  // @ts-ignore
  const queryString = new URLSearchParams(queryParams).toString();
  console.log("String", queryString);
  const response = await fetch(`http://localhost:3000/v1/products?${queryString}`);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return await response.json();
}

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const page = typeof searchParams.page === 'string' ? Number(searchParams?.page) : 1;
  const limit = typeof searchParams.limit === 'string' ? Number(searchParams?.limit) : 20;

  const response = await getProducts(page, limit);

  return (
    <main className="w-full px-12">

      {/*  Header*/}
      <Header title={`Productos disponibles (${response?.pagination?.documentCount })`} >
        <Link href={`/products/create`} className="top-2 right-2 rounded-full px-3 gap-2 w-auto h-10 bg-white flex items-center justify-center hover:bg-black/5">
          <PlusCircleIcon className="w-6 h-6 text-black" />

          <span className="text-black text-sm font-semibold">Agregar producto</span>
        </Link>
      </Header>

      <ProductsList products={response?.data} />

    </main>
  );
}
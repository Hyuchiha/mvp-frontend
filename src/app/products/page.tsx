import Products from "@/app/products/Products";


export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const page = typeof searchParams.page === 'string' ? Number(searchParams?.page) : 1;
  const limit = typeof searchParams.limit === 'string' ? Number(searchParams?.limit) : 20;

  return (
    <main className="w-full px-12">

      <Products page={page} limit={limit} />

    </main>
  );
}
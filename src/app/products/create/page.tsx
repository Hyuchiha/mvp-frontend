import Header from "@/components/Header";
import CreateProduct from "@/app/products/create/CreateProduct";

export default function CreatePage() {

  return (
    <main className="w-full px-12">
      <Header title="Crear producto" />

      <CreateProduct />
    </main>
  )
}

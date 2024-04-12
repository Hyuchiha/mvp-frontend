import Header from "@/components/Header";
import UpdateProduct from "@/app/products/[id]/edit/EditProduct";

type Props = {
  params: {
    id: string
  }
}

export default function EditPage({ params }: Props) {
  return (
    <main className="w-full px-12">
      <Header title="Editar producto" />

      <UpdateProduct prodId={params.id} />
    </main>
  )
}

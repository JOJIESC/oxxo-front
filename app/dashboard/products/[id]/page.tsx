import { API_URL } from "@/constants";
import DeleteProduct from "./_components/DeleteProduct";
import { authHeaders } from "@/helpers/authHelpers";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";

export default async function ProductPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const responseProduct = await fetch(`${API_URL}/products/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: [`dashboard:products:${params.id}`],
    },
  });
  const product: Product = await responseProduct.json();
  const responseProviders = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
  });
  const providers: Provider[] = await responseProviders.json();
  return (
    <div className="w-full">
      <div className="bg-orange-600">
        <h1 className="w-full font-bold text-white text-center text-2xl py-2">
          Nombre del producto: {product.productName}
        </h1>
        <h2 className="text-xl font-bold text-white text-center">
          Precio: {product.productPrice}
        </h2>
        <h2 className="text-md font-bold text-white text-center py-2">
          Cant. de Sellos: {product.countSeal}
        </h2>
      </div>
      <UpdateProduct product={product} providers={providers} />
      <div className="pl-10">
        <DeleteProduct productId={product.productId} />
      </div>
    </div>
  );
}

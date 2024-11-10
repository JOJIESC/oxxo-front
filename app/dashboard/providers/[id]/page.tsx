import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import ProviderCard from "../_components/ProviderCard";
import { Provider } from "@/entities";
import ProductCard from "./_components/ProductCard";
import { Product } from "@/entities";
import Link from "next/link";
import FormUpdateProvider from "./_components/FormUpdateProvider";

export default async function ProvidersPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response = await fetch(`${API_URL}/providers/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: [`dashboard:providers:${params.id}`],
    },
  });
  const provider: Provider = await response.json();
  return (
    <div className="w-10/12 flex flex-col flex-grow-0 pl-10 gap-10 h-[90vh] pt-10">
      <div className="flex flex-row">
        <ProviderCard provider={provider} />
        <FormUpdateProvider provider={provider} />
      </div>
      <hr />
      {provider.products.map((product: Product) => (
        <Link
          key={product.productId}
          href={{ pathname: `/dashboard/products/${product.productId}` }}
          className="hover:scale-110 transition-all"
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}

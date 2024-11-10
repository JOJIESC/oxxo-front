"use client";
import { Product, Provider } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";

export default function FilteredCards({
  products,
  providers,
}: {
  products: Product[];
  providers: Provider[];
}) {
  const [filtered, setFiltered] = useState<string>("");
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [show, setShow] = useState(false);
  const [provider, setProvider] = useState<string>();

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (
        product.productName.toLowerCase().includes(filtered.toLowerCase()) &&
        product.provider.providerId === provider
      ) {
        return true;
      } else return false;
    });
    setProductsList(filteredProducts);
    setShow(true);
  }, [filtered, provider, products]);

  return (
    <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-orange-400 border-r-2 pt-10 px-10">
      <Select
        label="Proveedor"
        onChange={(event) => {
          setProvider(event.target.value);
          const filteredProducts = products.filter((product) => {
            if (product.provider.providerId === provider) {
              return true;
            } else return false;
          });
          setProductsList(filteredProducts);
        }}
      >
        {providers.map((provider) => {
          return (
            <SelectItem key={provider.providerId} value={provider.providerId}>
              {provider.providerName}
            </SelectItem>
          );
        })}
      </Select>
      <Input
        label="Buscar"
        onChange={(event) => {
          setFiltered(event.target.value);
        }}
      />
      {show &&
        productsList.map((product) => {
          return (
            <Link
              className="hover:scale-110 transition-transform"
              key={product.productId}
              href={{ pathname: `/dashboard/products/${product.productId}` }}
            >
              <ProductCard product={product} />
            </Link>
          );
        })}
    </div>
  );
}

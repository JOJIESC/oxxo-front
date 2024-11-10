import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import React, { Children, ReactNode } from "react";
import { Product } from "@/entities";
import FilteredCards from "./_components/FilteredCards";

const LayoutProducts = async ({ children }: { children: ReactNode }) => {
  const responseProducts = await fetch(`${API_URL}/products`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashbpoard:products"],
    },
  });
  const responseProviders = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashbpoard:providers"],
    },
  });
  const products: Product[] = await responseProducts.json();
  const providers = await responseProviders.json();
  return (
    <div className="h-[90vh] w-full flex flex-row">
      <div className="w-6/12">
        <FilteredCards products={products} providers={providers} />
      </div>
      <div className="w-6/12">{children}</div>
    </div>
  );
};

export default LayoutProducts;

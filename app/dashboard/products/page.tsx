import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import React from "react";
import { Product } from "@/entities";
import FilteredCards from "./_components/FilteredCards";

const ProductsPage = async () => {
  const response = await fetch(`${API_URL}/products`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashbpoard:products"],
    },
  });
  const products: Product[] = await response.json();
  return (
    <div className="h-[90vh] w-full">
      <div className="w-6/12">
        <FilteredCards products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;

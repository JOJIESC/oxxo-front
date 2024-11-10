import createProduct from "@/actions/products/create";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import SelectProvider from "./_components/SelectProvider";
const ProductsPage = async () => {
  const response = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashbpoard:providers"],
    },
  });
  const providers = await response.json();
  return (
    <>
      <form className="px-10 justify-center pt-10" action={createProduct}>
        <div className="flex flex-col p-10 rounded-md gap-6 bg-orange-600">
          <h1 className="text-2xl ">Crear Producto</h1>
          <Input label="Nombre" name="productName" />
          <Input
            label="Precio"
            endContent={<LuDollarSign size="20" />}
            name="productPrice"
          />
          <Input label="Num. Sellos" name="countSeal" />
          <SelectProvider providers={providers} />
          <Button type="submit" color="primary">
            Crear Producto
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProductsPage;

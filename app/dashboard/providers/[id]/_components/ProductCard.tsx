import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Product } from "@/entities";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>{product.productName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Nombre del producto: <b>{product.productName}</b>
        </p>
        <p>
          Precio: <b>{product.productPrice}</b>
        </p>
        <p>
          Stock: <b>{product.countSeal}</b>
        </p>
      </CardBody>
    </Card>
  );
}

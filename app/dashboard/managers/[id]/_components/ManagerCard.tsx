import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Manager } from "@/entities";
import Link from "next/link";
export default function ManagerCard({ manager }: { manager: Manager }) {
  return (
    <Card className="mx-20 py-2 text-center">
      <CardHeader>
        <p className="w-full text-4xl">
          <b>{manager.managerFullName}</b>
        </p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="w-full">
          Email: <b>{manager.managerEmail}</b>
        </p>
        <p className="w-full">
          Telefono: <b>{manager.managerPhoneNumber}</b>
        </p>
        <p className="w-full">
          Salario: <b>{manager.managerSalary}</b>
        </p>
        {manager.location ? (
          <>
            <p>
              Tienda:
              <Link
                href={{
                  pathname: `/dashboard`,
                  query: { store: manager.location.locationId },
                }}
              >
                <b className="underline">{manager.location.locationName}</b>
              </Link>
            </p>
            <p>{manager.location.locationAddress}</p>
            <p>{manager.location.locationLatLng}</p>
          </>
        ) : (
          <p>No tiene tineda</p>
        )}
      </CardBody>
    </Card>
  );
}

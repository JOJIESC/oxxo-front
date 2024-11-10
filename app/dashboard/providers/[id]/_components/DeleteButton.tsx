import { Provider } from "@/entities";
import deleteProvider from "@/actions/providers/delete";
import { Button } from "@nextui-org/react";
export default function DeleteProviderButton({
  provider,
}: {
  provider: Provider;
}) {
  const deleteProviderById = deleteProvider.bind(null, provider.providerId);
  return (
    <form action={deleteProviderById} className="flex w-full">
      <Button type="submit" color="danger">
        Estoy Seguro
      </Button>
    </form>
  );
}

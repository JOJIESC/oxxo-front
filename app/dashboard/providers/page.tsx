import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHelpers";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import ProviderCard from "@/app/dashboard/providers/_components/ProviderCard";
import { Button } from "@nextui-org/react";
const ProvidersPage = async () => {
  const response = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
  });
  const providers: Provider[] = await response.json();

  return (
    <div className="flex flex-grow-0 px-10 pt-10 flex-col h-[90vh] items-end w-full">
      <Button className="w-fit" color="primary">
        <LuPlus size="20" />
      </Button>
      <div className="w-full flex flex-wrap px-10 flex-grow-0 gap-14 mx-10">
        {providers.map((provider: Provider) => (
          <Link
            href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
          >
            <ProviderCard key={provider.providerId} provider={provider} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProvidersPage;

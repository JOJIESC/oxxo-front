import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHelpers";
import ProviderCard from "@/app/dashboard/providers/_components/ProviderCard";
const ProvidersPage = async () => {
  //   const response = await fetch(`${API_URL}/providers`, {
  //     headers: {
  //       ...authHeaders(),
  //     },
  //   });

  //   console.log(response);
  //   const providers: Provider[] = await response.json();
  //   console.log(providers);

  return "All providers";
};

export default ProvidersPage;

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Location } from "@/entities";
import { API_URL} from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHelpers";
export default async function LocationCard({store}: {store: string | string[] | undefined}) {
    if(!store || store === "0" || store === "") return null
    const response = await  fetch(`${API_URL}/locations/${store}`,
        {
            headers:{
                ...authHeaders()
            },
            method: "GET",
            next: {
                tags:["dashboard:locations", `dashboard:locations:${store}`]
            }
        })
    const data: Location = await response.json()
    return(
        <Card>
            <CardHeader>
            <p className="w-full"><b>{data.locationName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">
                    Manager:
                    <Link href={{pathname: `/dashboard/managers/${data.manager?.managerId}`}}>
                <b>{data.manager?.managerFullName}</b>
                    </Link>
                </p>
            </CardBody>
        </Card>
    )
}
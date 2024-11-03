import { API_URL } from "@/constants"
import { Card, CardHeader, CardBody,Divider } from "@nextui-org/react"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHelpers"

export default async function ManagerPage({params,}:{params: {id:string}})
{
    const response = await fetch(`${API_URL}/managers/${params.id}`,
        {
            headers:{
                ...authHeaders()
            },
            method: "GET",
            next: {
                tags: [`dashboard:managers:${params.id}`]
                }
            
        }
    )
    const data: Manager = await response.json()
    return (
            <Card>
                <CardHeader>
                    <p className="w-full">Nombre: <b>{data.managerFullName}</b></p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                    <p className="w-full">Telefono: <b>{data.managerPhoneNumber}</b></p>
                    {data.location ? (
                        <>
                        <p>Tienda: {data.location.locationName}</p>
                        <p>{data.location.locationAddress}</p>
                        <p>{data.location.locationLatLng}</p>
                        </>
                    ) : ( <p>No tiene tineda</p>)}
                </CardBody>
            </Card>
    )
}
import { Input,Button } from "@nextui-org/react"
import { createLocation } from "@/actions/locations/create"
import axios from "axios"
import { API_URL } from "@/constants"
import { TOKEN_NAME } from "@/constants"
import { cookies } from "next/headers"
import SelectManager from "@/app/dashboard/_components/SelectManager"

export default async function FromNewLocation() {
    const token = cookies().get(TOKEN_NAME)?.value
    const resonseManagers = await axios.get(`${API_URL}/managers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocations = await axios.get(`${API_URL}/locations`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation}>
            <Input name="locationName" label="Nombre de la tineda" placeholder="Oxxo Juriquilla"/>
            <Input name="locationAddress" label="Dirección de la tienda" placeholder="Av de la luz"/>
            <Input name="locationLat" label="Latitud" placeholder="-100.232"/>
            <Input name="locationLng" label="Longitud" placeholder="12.343"/>
            <SelectManager managers={resonseManagers.data} locations={responseLocations.data}/>
            <Button type="submit">Subir</Button>
        </form>
    )
}
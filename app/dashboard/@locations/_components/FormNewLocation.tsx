import { Input,Button } from "@nextui-org/react"
import { createLocation } from "@/actions/locations/create"
import axios from "axios"
import { API_URL } from "@/constants"
import SelectManager from "@/app/dashboard/_components/SelectManager"
import { authHeaders } from "@/helpers/authHelpers"

export default async function FromNewLocation({store}: {store: string | string[] | undefined}) {
    if(store) return null
    const resonseManagers = await axios.get(`${API_URL}/managers`,{
        headers:{
        ...authHeaders()
        }
    })
    const responseLocations = await axios.get(`${API_URL}/locations`,{
        headers:{
        ...authHeaders()
        }
    })
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input name="locationName" label="Nombre de la tineda" placeholder="Oxxo Juriquilla"/>
            <Input name="locationAddress" label="Dirección de la tienda" placeholder="Av de la luz"/>
            <Input name="locationLat" label="Latitud" placeholder="-100.232"/>
            <Input name="locationLng" label="Longitud" placeholder="12.343"/>
            <SelectManager managers={resonseManagers.data} locations={responseLocations.data}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}
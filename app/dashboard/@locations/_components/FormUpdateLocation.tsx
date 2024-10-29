import { Input,Button } from "@nextui-org/react"
import { createLocation } from "@/actions/locations/create"
import { API_URL } from "@/constants"
import SelectManager from "@/app/dashboard/_components/SelectManager"
import { authHeaders } from "@/helpers/authHelpers"
import { Manager, Location } from "@/entities"
import UpdateLocation from "./UpdateLocation"

export default async function FromUpdateLocation({store}: {store: string | string[] | undefined}) {
    if(!store || store === undefined) return null
    const resonseManagers = await fetch(`${API_URL}/managers`,{
        headers:{
        ...authHeaders()
        },
        method: "GET",
        next: {
            tags:["dashboard:managers"]
        }
    })
    const responseLocations = await fetch(`${API_URL}/locations`,{
        headers:{
        ...authHeaders()
        },
        method: "GET",
        next:{
            tags:["dashboard:locations:employees"]
        }
    })

    const dataManagers: Manager[] = await resonseManagers.json()
    const dataLocations: Location[] = await responseLocations.json()
    let foundLocation = dataLocations.find((location)=> location.locationId === +store)
    let foundManager = dataManagers.find((manager)=> manager.managerId === foundLocation?.manager?.managerId)

    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input defaultValue={foundLocation?.locationName} name="locationName" label="Nombre de la tineda" placeholder="Oxxo Juriquilla"/>
            <Input  defaultValue={foundLocation?.locationAddress} name="locationAddress" label="Dirección de la tienda" placeholder="Av de la luz"/>
            <Input  defaultValue={foundLocation?.locationLatLng[0].toString()} name="locationLat" label="Latitud" placeholder="-100.232"/>
            <Input  defaultValue={foundLocation?.locationLatLng[1].toString()} name="locationLng" label="Longitud" placeholder="12.343"/>
            <SelectManager defaultManager={foundManager?.managerId} managers={dataManagers} locations={dataLocations}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}
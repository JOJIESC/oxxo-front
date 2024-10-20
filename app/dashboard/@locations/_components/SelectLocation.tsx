'use client'
import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter} from 'next/navigation'

export default function SelectLocation({locations}: {locations: Location[]}) {
    const router = useRouter()
    return (
        <Select placeholder="Selecciona una tienda" classNames={{
            mainWrapper: "hover:ring-2 ring-red-300 rounded-xl transition-all",
        }}
        label="Tienda"
        onChange={((event)=>{
           router.push(`/dashboard?store=${event.target.value}`)
        })}>
            {locations.map((location: Location) => (
                <SelectItem key={location.locationId} value={location.locationId}>
                    {location.locationName}
                </SelectItem>
            ))}
        </Select>
    );
}
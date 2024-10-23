'use client'
import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter} from 'next/navigation'

export default function SelectLocation(
    {locations,store}: 
    {locations: Location[], store: string | string[] | undefined}) {
       
    const router = useRouter()
    return (
        <Select placeholder="Selecciona una tienda" classNames={{
            mainWrapper: "hover:ring-2 ring-red-300 rounded-xl transition-all",
        }}
        label="Tienda"
        selectedKeys={store ? store : "0"}
        onChange={((event)=>{
            console.log(event.target.value)
            if(event.target.value === "0" || event.target.value === ""){
                router.push(`/dashboard`)
            }else{
                router.push(`/dashboard?store=${event.target.value}`)
            }
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
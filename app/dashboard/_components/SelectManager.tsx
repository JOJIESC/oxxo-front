'use client'
import {Select, SelectItem} from '@nextui-org/react'
import { Manager,Location} from '@/entities'
export default function SelectManager({managers,locations} : {managers: Manager[],locations: Location[]}) {
    const disablesKeys = locations.map((location:Location)=> {
        return location.manager?.managerId
    }).filter((managerId) => managerId !== undefined)
    return (
        <Select label="Selecciona un manager" name='manager' disabledKeys={disablesKeys}>
         {managers.map((manager:Manager)=> {
            return (
                <SelectItem key={manager.managerId} value={manager.managerId}>
                    {manager.managerFullName}
                </SelectItem>
            )
         })}
        </Select>
    )
}
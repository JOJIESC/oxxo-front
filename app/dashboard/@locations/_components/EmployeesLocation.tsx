import {Employee} from "@/entities"
import {API_URL,TOKEN_NAME} from "@/constants"
import { cookies } from "next/headers"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { authHeaders } from "@/helpers/authHelpers"

export default async function storeLocation({store}: {store:string | string[] | undefined }) {
    if(!store) return "no hay empleados"
    const response = await fetch(`${API_URL}/employees/location/${store}`,
        {
            headers:{
                ...authHeaders()
            },
            method: "GET",
            next: {
                tags:["dashboard:employees"]
            }
        })

    const data: Employee[] = await response.json()
        
    return data.map((employee)=>{
        const fullName = employee.employeeName + " " + employee.employeeLastName;
            return <Card className="mx-10 my-10">
                    <CardHeader>
                        <p className="w-full">Nombre: <b>{fullName}</b></p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                        <p className="w-full">Telefono: <b>{employee.employeePhoneNumber}</b></p>
                    </CardBody>
                </Card>
        })

}
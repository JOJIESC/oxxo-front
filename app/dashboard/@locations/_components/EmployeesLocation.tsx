import axios from "axios"
import {Employee} from "@/entities"
import {API_URL,TOKEN_NAME} from "@/constants"
import { cookies } from "next/headers"

export default async function storeLocation({store}: {store: string}) {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const {data} = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    console.log(data)
    return data.map((employee)=>{
            return <div>{employee.employeeName}</div>
        })

}
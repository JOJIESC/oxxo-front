import axios from 'axios';
import { API_URL, TOKEN_NAME } from '@/constants';
import { cookies } from 'next/headers';
import { Location } from '@/entities';
import SelectLocation from './_components/SelectLocation';
import LocationCard from './_components/LocationCard';
import FormNewLocation from './_components/FormNewLocation';
const LocationsPage = async ({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}) => {
    const userCookies = cookies()
    const token  = userCookies?.get(TOKEN_NAME)?.value
    let {data} = await axios.get<Location[]>(`${API_URL}/locations`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationAddress: "No existe",
            locationLatLng:[0,0]
        },
        ...data
    ]
    return (
    <div className='w-8/12'>
        <div className='flex flex-col justify-center items-center w-full h-[90vh]'>
            <div className='w-2/4'>
                <SelectLocation locations={data} store={searchParams?.store}/>
            </div>
            <div>
                <FormNewLocation/>
            </div>
            <div>
                <LocationCard store={searchParams.store}/>
            </div>
        </div>
    </div>)
}

export default LocationsPage;
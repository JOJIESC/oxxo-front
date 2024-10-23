import axios from 'axios';
import { TOKEN_NAME } from '@/constants';
import { cookies } from 'next/headers';
import { Location } from '@/entities';
import SelectLocation from './_components/SelectLocation';
import LocationCard from './_components/LocationCard';
const LocationsPage = async ({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}) => {
    const userCookies = cookies()
    const token  = userCookies?.get(TOKEN_NAME)?.value
    let {data} = await axios.get<Location[]>('http://127.0.0.1:4000/locations',
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
                <LocationCard store={searchParams.store}/>
            </div>
        </div>
    </div>)
}

export default LocationsPage;
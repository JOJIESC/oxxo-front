import axios from 'axios';
const CountPage = async() => {
    const countLocations = await axios.get('http://127.0.0.1:4000/locations')
    return "Num de Ubicaciones: " + countLocations?.data?.length
}

export default CountPage;
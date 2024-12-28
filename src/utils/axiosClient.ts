import axios from "axios"
const url = 'https://shiba-store-back-production.up.railway.app/api/'
const axiosClient = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": 'application/json'
  }
})
export const fetcher = async(endpoint:string) => {
  try {
    const response = await axiosClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ",error)
    throw error;
  }
}
export const getConsoles = async () => {
  try {
    const data = await fetcher('/consoles')
    return data
  } catch (error) {
    console.error("Error getting data: ",error)
    return null
  }
}

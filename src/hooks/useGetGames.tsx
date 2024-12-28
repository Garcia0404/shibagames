import useSWR from "swr"
import { fetcher } from "../utils/axiosClient"
interface Return {
  data:Game[]
  error:any
  isLoading:boolean
}
export const useGetGames = ():Return => {
  const { data,error,isLoading } = useSWR('/games',fetcher)
  return {
    data,error,isLoading
  }
}

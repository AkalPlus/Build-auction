import { useQuery } from '@tanstack/react-query'
import useAxios from './axios'
import { queryKey } from '@/app/constants/queryKey'

export const useProductList = () => {
  const { axiosInstance } = useAxios()

  const getProductList = async () => {
    return axiosInstance.get('/product-list')
  }

  const getProductQuery = useQuery({
    queryKey: queryKey.JOB_LIST,
    queryFn: getProductList,
  })

  return {
    getProductQuery,
    getProductList,
  }
}

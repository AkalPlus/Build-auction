import { useQuery } from '@tanstack/react-query'
import { queryKey } from '@/app/constants/queryKey'
import useAxios from '@/app/utils/api/axios'

export const useProductList = () => {
  const { axiosInstance } = useAxios()

  const getJobList = async () => {
    return axiosInstance.get('/product-list')
  }

  const getJobQuery = useQuery({
    queryKey: queryKey.JOB_LIST,
    queryFn: getJobList,
  })

  return {
    getJobList,
    getJobQuery,
  }
}

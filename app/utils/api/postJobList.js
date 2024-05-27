import { queryKey } from '@/app/constants/queryKey'
import useAxios from '@/app/utils/api/axios'
import { QueryClient, useMutation } from '@tanstack/react-query'

export const usePostJob = async (data) => {
  const queryClient = new QueryClient()

  const { axiosInstance } = useAxios()

  const postJob = async () => {
    return axiosInstance.post('/post-job', data)
  }

  const postJobQuery = useMutation({
    mutationFn: postJob,
    onSuccess: () => {
      // invaldiates the cache for the job list so that job list are refetched after every new post
      queryClient.invalidateQueries(queryKey.JOB_LIST)
    },
  })

  return {
    postJob,
    postJobQuery,
  }
}

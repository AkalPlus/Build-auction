'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAxios from '../utils/api/axios'
function verifyPage() {
  const {
    permissions,
    isLoading,
    user,
    accessToken,
    organization,
    userOrganizations,
    getPermission,
    getBooleanFlag,
    getIntegerFlag,
    getFlag,
    getStringFlag,
    getClaim,
    getAccessToken,
    getToken,
    getIdToken,
    getOrganization,
    getPermissions,
    getUserOrganizations,
  } = useKindeBrowserClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { axiosInstance } = useAxios()
  const onSubmit = async (data) => {
    console.log(data)
    const res = await axiosInstance.post('user/addUser', data)
    console.log(res)
  }
  if (user === null) {
    return <p>Not Found Token</p>
  }
  return (
    <>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" defaultValue={`${user.given_name}`} disabled />
          <input
            type="hidden"
            defaultValue={`${user.given_name}`}
            {...register('firstName')}
          />
          <input type="text" defaultValue={`${user.family_name}`} disabled />
          <input
            type="hidden"
            defaultValue={`${user.family_name}`}
            {...register('lastName')}
          />
          <input type="text" defaultValue={`${user.email}`} disabled />
          <input
            type="hidden"
            defaultValue={`${user.email}`}
            {...register('email')}
          />
          <label for=""> Select User Type</label>
          <select {...register('userType')}>
            <option value="client">client</option>
            <option value="contracter">contracter</option>
          </select>
          {/* <select id="options" name="options">
            <option value="client">client</option>
            <option value="contractor">contractor</option>
          </select> */}
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  )
}

export default verifyPage

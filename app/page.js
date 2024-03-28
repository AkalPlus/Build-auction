import Navbar from '@/components/Navbar'
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
    </div>
  )
}

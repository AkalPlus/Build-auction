import ContractorLists from '@/components/ContractorLists'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import WorkList from '@/components/WorkList'
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <WorkList />
      <ContractorLists />
      <CTA />

      <div className="flex justify-around bg-black">
        <LoginLink postLoginRedirectURL="/">
          <Button variant="primary">Sign in</Button>
        </LoginLink>
        <RegisterLink postLoginRedirectURL="/">
          <Button variant="primary">Sign up</Button>
        </RegisterLink>
      </div>
      <Faq />
    </>
  )
}

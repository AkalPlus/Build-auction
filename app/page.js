import ContractorLists from '@/components/ContractorLists'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
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
      <Navbar />
      <HeroSection />
      <WorkList />
      <ContractorLists />
      <CTA />

      <div className="flex justify-around bg-black">
        <LoginLink postLoginRedirectURL="/dashboard">
          <Button variant="primary">Sign in</Button>
        </LoginLink>
        <RegisterLink postLoginRedirectURL="/verify">
          <Button variant="primary">Sign up</Button>
        </RegisterLink>
      </div>
      <Faq />
      <Footer />
    </>
  )
}

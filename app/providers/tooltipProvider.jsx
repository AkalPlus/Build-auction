import { TooltipProvider } from '@radix-ui/react-tooltip'

export const CustomTooltipProvider = ({ children }) => {
  return <TooltipProvider>{children}</TooltipProvider>
}

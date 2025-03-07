import { EllipsisVertical } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import UserButton from './user-button'
//import CartButton from './cart-button'
//import UserButtonWrapper from './UserButtonWrapper'
//import ThemeSwitcher from './theme-switcher'
//import LanguageSwitcher from './language-switcher'
//import { useTranslations } from 'next-intl'

const Menu = ({ forAdmin = false }: { forAdmin?: boolean }) => {
  //const t = useTranslations()
  return (
    <div className='flex justify-end'>
      <nav className='md:flex gap-3 hidden w-full'>
        {/* <LanguageSwitcher /> */}
        {/* <ThemeSwitcher /> */}
        <UserButton />
        {/* <UserButtonWrapper /> */}
        {forAdmin ? null : 
        <></>
        // <CartButton />
        }
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle header-button'>
            <EllipsisVertical className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent className='bg-black text-white  flex flex-col items-start  '>
            <SheetHeader className='w-full'>
              <div className='flex items-center justify-between '>
                {/* <SheetTitle className='  '>{t('Header.Site Menu')}</SheetTitle> */}
                <SheetTitle className='  '>NoorMahal</SheetTitle>
                <SheetDescription></SheetDescription>
              </div>
            </SheetHeader>
            {/* <LanguageSwitcher /> */}
            {/* <ThemeSwitcher /> */}
            {/* <UserButtonWrapper /> */}
            {/* <UserButton /> */}
            {/* <CartButton /> */}
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Menu

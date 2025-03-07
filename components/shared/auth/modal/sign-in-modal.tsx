'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CredentialsSignInForm from '@/app/[locale]/(auth)/sign-in/credentials-signin-form'
import { GoogleSignInForm } from '@/app/[locale]/(auth)/sign-in/google-signin-form'
import SeparatorWithOr from '@/components/shared/separator-or'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignInModal({ onClose }: { onClose: () => void }) {
  const router = useRouter()

  useEffect(() => {
    // Refresh page when the modal closes to reflect authentication state
    return () => {
      router.refresh()
    }
  },)

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[400px]">
        <CardContent>
        asdfsafsfaf
        </CardContent>
      </Card>
    </div>
  )
}
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CredentialsSignInForm from "@/app/(auth)/sign-in/credentials-signin-form";
import { GoogleSignInForm } from "@/app/(auth)/sign-in/google-signin-form";
import SeparatorWithOr from "@/components/shared/separator-or";

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignUpPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <p className='text-2xl'>Sign Up</p>
      <div>
            <CredentialsSignInForm />
            <SeparatorWithOr />
            <div className='mt-4'>
              <GoogleSignInForm />
            </div>
          </div>
          <SeparatorWithOr>New to NoorMahal?</SeparatorWithOr>

<Link href={`/sign-up`}>
  <Button className='w-full' variant='outline'>
    Create your NoorMahal account
  </Button>
</Link>
      </div>
    </div>
  );
}
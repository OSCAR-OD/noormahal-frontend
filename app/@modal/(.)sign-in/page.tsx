"use client";
import Modal from "@/components/modal";
import CredentialsSignInForm from "../../(auth)/sign-in/credentials-signin-form";
import { GoogleSignInForm } from "../../(auth)/sign-in/google-signin-form";
import SeparatorWithOr from "@/components/shared/separator-or";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function InterceptedSignIn() {
  return (
    <Modal className="w-96">
      <div className=" rounded-lg  w-full">
        <CredentialsSignInForm />
        <SeparatorWithOr />
        <div className="mt-4">
          <GoogleSignInForm />
        </div>
        <SeparatorWithOr>New to NoorMahal?</SeparatorWithOr>
        <Link href={`/sign-up`}>
          <Button className="w-full" variant="outline">
            Create your NoorMahal account
          </Button>
        </Link>
      </div>
    </Modal>
  );
}

'use client'
import Link from "next/link";

//import Modal from 'react-modal'
//import { useEffect, useState } from 'react'

export default function UserButton() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [appElement, setAppElement] = useState<HTMLElement | null>(null)

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const nextElement = document.getElementById('__next')
  //     if (nextElement) {
  //       setAppElement(nextElement)
  //     }
  //   }
  // }, [])

  return (
    <>
      <Link
        href={"/sign-in"}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        Sign-In
      </Link>
    </>
  )
}

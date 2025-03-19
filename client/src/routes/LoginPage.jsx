import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const LoginPage = () => {
  return (
    <div className={`flex items-center justify-center h-[calc(100vh-20px)]`}>
      <SignUp signInUrl={`/register`} />
    </div>
  )
}

export default LoginPage

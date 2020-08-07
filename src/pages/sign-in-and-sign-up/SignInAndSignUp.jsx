import React from 'react'
import "./SignInAndSignUp.scss"
import SignIn from '../../components/sign-in/SignIn.jsx'
import SignUp from '../../components/sign-up/SignUp'

export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

import React, { Fragment, useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { signup } from "app/utils"
import TabsButton from "app/TabsButton"
import { FaDumbbell } from "react-icons/fa"
import { DateFields, MonthField, DayField, YearField } from "app/DateFields"
// import SignupForm from "./SignupForm.final"
// export default SignupForm

export default function SignupForm() {
  return (
    <form className="SignupForm">
      <div>
        <input type="text" placeholder="Display Name" />
        <input type="text" placeholder="Photo URL" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <DateFields defaultValue={new Date()}>
        <MonthField />
        <DayField />
        <YearField start={1900} end={2100} />
      </DateFields>
      <TabsButton>Submit</TabsButton>
    </form>
  )
}

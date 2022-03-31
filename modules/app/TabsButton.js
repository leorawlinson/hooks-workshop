import React from "react"
import { FaDumbbell } from "react-icons/fa"

export default function TabsButton({ children }) {
  return (
    <button className="TabsButton icon_button cta" type="submit">
      <FaDumbbell />
      {children}
    </button>
  )
}

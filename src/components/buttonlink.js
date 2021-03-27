import { Link } from "gatsby"
import React from "react"

const ButtonLink = ({ children, type, ...rest }) => {
  let typeStyle
  let classStr
  switch (type) {
    case "primary":
      classStr =
        "bg-green-500 text-black hover:bg-green-300 px-6 py-2 transition duration-200"
      break
    case "secondary":
      classStr = "text-green-500 hover:text-green-300 transition duration-200"
      break
  }

  return (
    <Link
      {...rest}
      style={{
        display: "inline-block",
        fontSize: 16,
      }}
      className={classStr}
    >
      {children}
    </Link>
  )
}

export default ButtonLink

import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full border-b-2 focus:border-orange-500 outline-none placeholder:text-gray-900",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

import type React from "react"

const Logo: React.FC = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#000" />
      <path d="M7 12H17M7 8H17M7 16H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default Logo


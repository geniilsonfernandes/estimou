import { cn } from '@/lib/cn'
import React from 'react'

type LogoProps = {
  hiddenText?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const Logo: React.FC<LogoProps> = ({ className, hiddenText = false, ...props }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 space-x-2 font-exo text-lg font-bold text-gray-800',
        className
      )}
      {...props}
    >
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="33" height="33" rx="8" fill="url(#paint0_linear_0_1)" />
        <path
          d="M27.5643 10.2129L16.872 5.07246C16.7688 5.02345 16.6561 4.9987 16.5423 5.00005C16.4284 5.0014 16.3163 5.02881 16.2143 5.08026C16.1123 5.1317 16.0229 5.20585 15.9529 5.29722C15.8828 5.38859 15.8339 5.49484 15.8096 5.60808C15.8072 5.61648 14.9518 9.66301 13.6816 13.6969C13.2485 15.0796 12.7635 16.4464 12.2571 17.6469L13.6304 18.3068C15.2801 14.4097 16.5866 9.03 17.0782 6.87829L26.3716 11.3404C26.0862 12.6106 25.3546 15.7252 24.3755 18.8349C23.7429 20.8497 23.0022 22.8621 22.2433 24.3187C21.5092 25.8214 20.6283 26.5602 20.4312 26.4611C19.2599 26.4863 18.4367 25.4017 17.8824 24.0114C17.6493 23.3998 17.468 22.7689 17.3405 22.1258C17.2349 21.607 17.2028 21.2812 17.2003 21.2812C17.1876 21.1499 17.1414 21.0241 17.0661 20.9166C16.9909 20.8091 16.8893 20.7235 16.7714 20.6684L6.08158 15.5305C5.95987 15.4716 5.82497 15.4469 5.69074 15.4587C5.5565 15.4705 5.42778 15.5184 5.31779 15.5976C5.20829 15.6772 5.12156 15.785 5.06649 15.91C5.01141 16.0349 4.98996 16.1726 5.00435 16.3087C5.01095 16.3473 5.16519 17.8618 5.78546 19.446C6.21603 20.5542 6.946 21.8118 8.13293 22.4474L18.8194 27.5937L18.8244 27.5836C19.288 27.8313 19.8142 27.9924 20.4303 28C21.9126 27.9018 22.7209 26.5997 23.5795 25.0407C26.054 20.2637 27.9677 11.1045 27.9825 11.0709C28.0191 10.9013 27.9979 10.7241 27.9223 10.5685C27.8468 10.4128 27.7214 10.288 27.5668 10.2146L27.5643 10.2129Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-1.79348"
            y1="-8.96739"
            x2="34.6141"
            y2="35.6902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#2C277F" />
          </linearGradient>
        </defs>
      </svg>
      {!hiddenText && <span className="animate-leftRight duration-500 ease-in-out">Estimou</span>}
    </div>
  )
}

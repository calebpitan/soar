import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="m19.336 18.21-4.602-4.6A8.069 8.069 0 0 0 8.496.43a8.066 8.066 0 1 0 0 16.133 8.02 8.02 0 0 0 5.11-1.825l4.601 4.598a.797.797 0 0 0 1.129-1.125m-10.84-3.253a6.47 6.47 0 0 1-6.465-6.46A6.473 6.473 0 0 1 8.496 2.03a6.475 6.475 0 0 1 6.465 6.465c0 3.563-2.902 6.461-6.465 6.461" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSearch

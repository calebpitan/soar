import * as React from 'react'
import type { SVGProps } from 'react'
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 25 25"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="m24.326 10.874-.002-.002L14.126.674A2.29 2.29 0 0 0 12.498 0c-.614 0-1.192.24-1.627.674L.678 10.867l-.01.01a2.304 2.304 0 0 0 .004 3.25 2.3 2.3 0 0 0 1.598.675h.407v7.505A2.697 2.697 0 0 0 5.37 25h3.99a.73.73 0 0 0 .732-.732v-5.884a1.23 1.23 0 0 1 1.229-1.23h2.353a1.23 1.23 0 0 1 1.229 1.23v5.884c0 .404.328.732.732.732h3.99a2.697 2.697 0 0 0 2.694-2.693v-7.505h.377c.614 0 1.192-.24 1.627-.675a2.305 2.305 0 0 0 .002-3.253" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgHome

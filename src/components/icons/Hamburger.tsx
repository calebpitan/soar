import * as React from 'react'
import type { SVGProps } from 'react'
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 14"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M18 13c0 .552-.52 1-1.161 1H1.16C.52 14 0 13.552 0 13s.52-1 1.161-1H16.84c.641 0 1.161.448 1.161 1M18 7a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1M18 1c0 .552-.52 1-1.161 1H1.16C.52 2 0 1.552 0 1s.52-1 1.161-1H16.84C17.48 0 18 .448 18 1"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgHamburger

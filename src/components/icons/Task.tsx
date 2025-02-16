import * as React from 'react'
import type { SVGProps } from 'react'
const SvgTask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 35 35"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M21.875 2.917a2.92 2.92 0 0 1 2.526 1.458h1.849a2.916 2.916 0 0 1 2.917 2.917v17.5a7.29 7.29 0 0 1-7.292 7.291H8.75a2.917 2.917 0 0 1-2.917-2.916V7.292A2.917 2.917 0 0 1 8.75 4.375h1.85a2.92 2.92 0 0 1 2.525-1.458zm-.257 10.76-6.186 6.188-2.063-2.063a1.458 1.458 0 0 0-2.062 2.062l2.99 2.991a1.604 1.604 0 0 0 2.268 0l7.117-7.115a1.458 1.458 0 1 0-2.064-2.062m-.472-7.844h-7.292a.73.73 0 0 0-.717.598l-.012.132V8.02a.73.73 0 0 0 .598.717l.131.012h7.292a.73.73 0 0 0 .717-.598l.012-.131V6.563a.73.73 0 0 0-.598-.718z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgTask

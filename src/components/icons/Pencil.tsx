import * as React from 'react'
import type { SVGProps } from 'react'

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 15 15"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="m14.587 4.163-1.35 1.35a.35.35 0 0 1-.499 0L9.486 2.263a.35.35 0 0 1 0-.498l1.351-1.35a1.41 1.41 0 0 1 1.99 0l1.76 1.76c.55.548.55 1.438 0 1.99m-6.26-1.24L.632 10.618l-.621 3.56a.704.704 0 0 0 .814.814l3.56-.624 7.693-7.693a.35.35 0 0 0 0-.498L8.827 2.924a.355.355 0 0 0-.5 0M3.635 9.959a.41.41 0 0 1 0-.58l4.512-4.512a.41.41 0 0 1 .58 0 .41.41 0 0 1 0 .58L4.216 9.958a.41.41 0 0 1-.58 0m-1.058 2.464h1.407v1.063l-1.89.332-.911-.912.33-1.89h1.064z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPencil

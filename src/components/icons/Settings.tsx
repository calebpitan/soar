import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 25 25"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M22.699 9.414h-.531q-.26-.811-.65-1.567l.375-.376c.912-.91.887-2.37 0-3.255l-1.108-1.11a2.3 2.3 0 0 0-3.256 0l-.376.377a10 10 0 0 0-1.567-.65V2.3A2.304 2.304 0 0 0 13.284 0h-1.569a2.304 2.304 0 0 0-2.3 2.301v.531q-.812.26-1.568.65l-.376-.375a2.3 2.3 0 0 0-3.255 0l-1.11 1.109a2.3 2.3 0 0 0 0 3.255l.377.376q-.391.756-.65 1.567H2.3A2.304 2.304 0 0 0 0 11.716v1.569a2.304 2.304 0 0 0 2.301 2.3h.531q.26.812.65 1.568l-.375.376a2.3 2.3 0 0 0 0 3.255l1.109 1.11a2.3 2.3 0 0 0 3.255 0l.376-.377q.757.391 1.567.65v.532A2.304 2.304 0 0 0 11.716 25h1.569a2.304 2.304 0 0 0 2.301-2.301v-.531q.811-.26 1.567-.65l.376.375c.909.91 2.368.889 3.255 0l1.11-1.109a2.3 2.3 0 0 0 0-3.255l-.377-.376c.26-.503.478-1.028.65-1.567h.532A2.304 2.304 0 0 0 25 13.284v-1.569a2.304 2.304 0 0 0-2.302-2.3M12.5 17.94c-3 0-5.44-2.44-5.44-5.44S9.5 7.06 12.5 7.06s5.44 2.44 5.44 5.44-2.44 5.44-5.44 5.44" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSettings

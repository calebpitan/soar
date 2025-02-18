import * as React from 'react'

import { Progress } from '@/components/ui/progress'

export const PageLoader = () => {
  const timer = React.useRef<NodeJS.Timeout | number>(-1)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 2) {
          clearInterval(timer.current)
          return 0
        }
        return p + 1
      })
    }, 1000)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <div className="h-full flex items-center justify-center">
      <Progress className="w-30" value={(progress / 3) * 100} />
    </div>
  )
}

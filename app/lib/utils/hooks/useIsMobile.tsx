import debounce from 'lodash/debounce'
import { useEffect, useState } from 'react'

/**
 * Checks if window is currently desktop or mobile.
 * @returns {boolean} Returns boolean based on if window is desktop or fullscreen.
 * */

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', debounce(updateSize, 250))
    return (): void => window.removeEventListener('resize', updateSize)
  }, [])

  return isMobile
}

export default useIsMobile

// This directive marks this component as a Client Component.
"use client"

// Import React and its hooks.
import * as React from "react"

// Define the breakpoint for mobile devices.
const MOBILE_BREAKPOINT = 768

// A custom hook to determine if the current viewport is a mobile size.
export function useIsMobile() {
  // State to store whether the screen is mobile-sized. 'undefined' initially to handle server-side rendering.
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // Effect to set up and clean up the media query listener.
  React.useEffect(() => {
    // Create a media query list object that matches screen widths less than the mobile breakpoint.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Define the function to run when the media query state changes.
    const onChange = () => {
      // Update the state based on the current window width.
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add the listener for changes to the media query.
    mql.addEventListener("change", onChange)
    
    // Set the initial state based on the current window width.
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup function to remove the listener when the component unmounts.
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array ensures this effect runs only once on mount.

  // Return the boolean value. '!!' converts the value to a strict boolean (true/false).
  return !!isMobile
}

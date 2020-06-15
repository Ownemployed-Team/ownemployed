import * as React from 'react'

export interface WindowSize {
    innerHeight: number
    innerWidth: number
    outerHeight: number
    outerWidth: number
}

function getSize(): WindowSize {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    }
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = React.useState(getSize())

    function handleResize() {
        setWindowSize(getSize())
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return windowSize
}

import { useWindowSize } from './useWindowSize'
import theme from '../config/theme'

const MOBILE_WIDTH = theme.breakpoints[0]

function convertRemToPixels(em: string) {
    const emUnits = parseInt(em.split('em')[0])

    return (
        emUnits *
        parseFloat(getComputedStyle(document.documentElement).fontSize)
    )
}

export function useIsMobile() {
    const windowSize = useWindowSize()
    return windowSize.innerWidth <= convertRemToPixels(MOBILE_WIDTH)
}

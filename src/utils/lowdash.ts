export function times(
    x: number,
    callback: (value: number, index: number, array: number[]) => void
) {
    const iterable = [...Array(x).keys()]
    iterable.forEach(callback)
}

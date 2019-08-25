export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const capitalizeAll = (s) => {
    if (typeof s !== 'string') return ''
    return s.replace(/(?:^|\s)\S/g, (a) => { return a.toUpperCase(); });
}
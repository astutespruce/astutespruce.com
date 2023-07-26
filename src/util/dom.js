// make sure that window is available (not available in Gatsby build)
export const hasWindow = typeof window !== 'undefined' && window

export const isUnsupported =
  hasWindow &&
  navigator !== undefined &&
  (/MSIE 9/i.test(navigator.userAgent) ||
    /MSIE 10/i.test(navigator.userAgent) ||
    /Trident/i.test(navigator.userAgent))

export const scrollIntoView = (id, behavior = 'auto', block = 'start') => {
  const elem = hasWindow ? window.document.getElementById(id) : null
  if (elem) {
    elem.scrollIntoView({ behavior, block })
  }
}

// make sure that window is available (not available in Gatsby build)
export const hasWindow = typeof window !== 'undefined' && window

export const scrollIntoView = (id, behavior = 'auto', block = 'start') => {
  const elem = hasWindow ? window.document.getElementById(id) : null
  if (elem) {
    elem.scrollIntoView({ behavior, block })
  }
}

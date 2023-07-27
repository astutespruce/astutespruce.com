import React, { useEffect, useState } from 'react'
import { Flex } from 'theme-ui'

import { Link } from 'components/Link'

import { hasWindow } from 'util/dom'
import { nav } from '../../../config/nav'

const isActive = (path) =>
  hasWindow && window.location.pathname.startsWith(path)

const Navigation = () => {
  // prevent rendering via SSR; only render on client
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <Flex
      as="nav"
      sx={{ flex: '1 0 auto', justifyContent: 'flex-end', gap: '1.25rem' }}
    >
      {nav.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          sx={{
            fontSize: '1.25rem',
            borderTop: '2px solid transparent',
            borderBottom: '2px solid',
            borderBottomColor: isActive(path) ? 'link' : 'transparent',
            textDecoration: 'none',
          }}
        >
          {label}
        </Link>
      ))}
    </Flex>
  )
}

export default Navigation

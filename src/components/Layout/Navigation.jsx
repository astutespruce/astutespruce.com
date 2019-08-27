import React from 'react'

import { Link } from 'components/Link'
import { Flex } from 'components/Grid'
import styled, { themeGet } from 'style'
import {hasWindow } from 'util/dom'
import { nav } from '../../../config/nav'


const NavBar = styled(Flex)`
  flex-grow: 1;
  justify-content: flex-end;
`

const NavLink = styled(Link)`
  font-size: 1.25rem;
  color: ${({ active }) =>
    themeGet(active ? 'colors.secondary.500' : 'colors.secondary.800')};
  border-top: 2px solid transparent;
  text-decoration: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ active }) =>
    active ? themeGet('colors.secondary.500') : 'transparent'};

  & + a {
    margin-left: 1.5rem;
  }

  &:hover {
    border-bottom-color: ${themeGet('colors.secondary.200')};
    transition: border-bottom-color 0.5s;
  }
`

const isActive = path => hasWindow && window.location.pathname.startsWith(path)

const Navigation = () => (
  <NavBar as="nav">
    {nav.map(({ path, label }) => (
      <NavLink key={path} to={path} active={isActive(path)}>
        {label}
      </NavLink>
    ))}
  </NavBar>
)

export default Navigation

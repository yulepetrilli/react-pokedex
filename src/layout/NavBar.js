import React from 'react'
import { Nav, NavHeader } from './layout.styled'

export default function NavBar() {
  return (
    <Nav className="navbar fixed-top" >
        <div className="container-fluid">
            <NavHeader className="navbar-brand" href="/">
                Pokedex
            </NavHeader>
        </div>
    </Nav>
  )
};
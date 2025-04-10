import React from 'react'
import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cilCloudDownload,
  cilLayers,
  cilPuzzle,
  cilSpeedometer,
} from '@coreui/icons'

export default function Sidebar() {
  return (
    <CSidebar className="border-end" unfoldable>
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>CALQ</CSidebarBrand>
      </CSidebarHeader>

      <CSidebarNav>
        <CNavTitle>Navigation</CNavTitle>

        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          &nbsp; Dashboard
        </CNavItem>

        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          &nbsp; With Badge
          <CBadge color="primary" className="ms-auto">
            NEW
          </CBadge>
        </CNavItem>

        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} />
              &nbsp; Components
            </>
          }
        >
          <CNavItem href="#">Dropdown Item 1</CNavItem>
          <CNavItem href="#">Dropdown Item 2</CNavItem>
        </CNavGroup>

        <CNavItem href="https://coreui.io" target="_blank">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} />
          &nbsp; Download CoreUI
        </CNavItem>

        <CNavItem href="https://coreui.io/pro/" target="_blank">
          <CIcon customClassName="nav-icon" icon={cilLayers} />
          &nbsp; Try CoreUI PRO
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  )
}

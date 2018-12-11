/**
 * This file will contain react-router, and code-splitting if required.
 */
import React from 'react'

import UINavbar from '../components/UI/Navbar/Navbar'
import Billing from './billing/Billing'

const Root = () => {
  return (
    <div>
      <UINavbar />
      <main className="pt-4">
        <Billing />
      </main>
    </div>
  )
}

export default Root

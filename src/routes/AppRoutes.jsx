import React from 'react'
import { mock } from '../mock'

export const AppRoutes = () => {

const {user} = mock()

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

import React, { useState } from 'react'
import { CornerContext } from './CornerContext'

export const CornerProvider = ({children}) => {

const [corner, setCorner] = useState('')

  return (
    <>
    <CornerContext.Provider value={{corner, setCorner}}>
      {children}
    </CornerContext.Provider>
  </>
  )
}

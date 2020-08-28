import React from 'react'

const style = {
  centered: {
    maxWidth: '970px',
    padding: '1rem',
    margin: '0 auto'
  }
}

export default function CenteredContent({ children }) {
  return (
    <div data-testid='centeredContent' style={style.centered}>
      {children}
    </div>
  )
}

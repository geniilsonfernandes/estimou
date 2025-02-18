import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundImage: 'radial-gradient(hsl(var(--foreground) / 20%) 1px, transparent 0)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px',
      }}
    >
      {children}
    </div>
  )
}

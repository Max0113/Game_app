import React from 'react'

function page() {
  return (
     <div className="space-y-4 animate-pulse">
      {[1].map((i) => (
        <div
          key={i}
          className="relative h-16 rounded-xl overflow-hidden
                     bg-white/10 backdrop-blur-md"
        >
          {/* shimmer */}
          <div
            className="absolute inset-0 
                       bg-gradient-to-r
                       from-transparent
                       via-white/20
                       to-transparent
                       animate-shimmer"
          />
        </div>
      ))}
    </div>
  )
}

export default page
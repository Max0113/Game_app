import React from "react"

function loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <span className="animate-spin h-27 w-27 border-5 border-white/30 border-t-white rounded-full"></span>
        </div>
    )
}

export default loading
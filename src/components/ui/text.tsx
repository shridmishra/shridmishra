import React from 'react'

const Text = ({ text }: { text: string }) => {
    return (
        <span className="text-lg sm:text-md text-foreground/50 font-medium">
            {text}
        </span>
    )
}

export default Text
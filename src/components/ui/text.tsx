import React from 'react'

const Text = ({ text }: { text: string }) => {
    return (
        <span className="text-md lg:text-lg text-foreground/50 font-medium">
            {text}
        </span>
    )
}

export default Text
import React from 'react';

interface Title {
    title: string,
    subtitle?: string,
}

const Title = ({ title, subtitle }: Title) => {
    return (
        <header className="text-center mb-6 lg:mb-12">
            <h2 className="text-1xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-foreground">
                {title}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {subtitle}
            </p>
        </header>
    )
}

export default Title;
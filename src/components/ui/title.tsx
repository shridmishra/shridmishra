import React from 'react';

interface Title {
    title: string,
    subtitle?: string,
}

const Title = ({ title, subtitle }: Title) => {
    return (
        <header className="text-center mb-14 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                {title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {subtitle}
            </p>
        </header>
    )
}

export default Title;
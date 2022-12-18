import React, { useLayoutEffect, useState } from "react";

type queries = Array<string>

const queries = [
    '(min-width: 320px) and (max-width: 479px)',
    '(min-width: 480px) and (max-width: 767px)',
    '(min-width: 768px) and (max-width: 999px)',
    '(min-width: 1000px) and (max-width: 1199px)',
    '(min-width: 1200px)',
]

export const useMatchMedia = () => {
    const mediaQueryLists = queries.map(query => matchMedia(query))

    const getValues = () => mediaQueryLists.map(mql => mql.matches)

    const [values, setValues] = useState(getValues)

    useLayoutEffect(() => {
        const handler = () => setValues(getValues)

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler))

        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler))
    })

    return ['isMobile320px', 'isMobile480px', 'isTablet768px', 'isTablet1000px', 'isDesktop1280+px'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {})
}

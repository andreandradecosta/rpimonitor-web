import React from 'react';


export function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}


export function resumeItems(items, key) {
    const resume = items.reduce((acc, elem) => {
        const i = elem[key];
        acc[i] = (acc[i] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(resume).map(k => {
        return {'value': k, 'count': resume[k]}
    })
}

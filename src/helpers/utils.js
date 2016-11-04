import React from 'react';


export const puke = (object) => (
    <pre>{JSON.stringify(object, null, ' ')}</pre>
);


export const resumeItems = (items, key) => {
    const resume = items.reduce((acc, elem) => {
        const i = elem[key];
        acc[i] = (acc[i] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(resume).map(k => {
        return {'value': k, 'count': resume[k]}
    })
};

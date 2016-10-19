import React from 'react';


export function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

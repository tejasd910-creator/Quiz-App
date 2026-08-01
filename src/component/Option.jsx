import React from 'react'

export function Option({id , text , onSelect}) {
    
    return (
        <div>
            <button
                type="button"
                onClick={() => onSelect(id)}
            >
                {text}
            </button>
        </div>
    )
}


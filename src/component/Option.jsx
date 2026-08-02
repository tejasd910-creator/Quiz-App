import React from 'react'

export function Option({ id, text, attempted, onSelect }) {

    return (
        <div>
            {/* <button
                type="button"
                onClick={() => {
                    onSelect(id)
                }}
            >
                {text}
            </button> */}
            <button
                onClick={() => onSelect(id)}
                className={`
                w-full text-left p-4 rounded-xl border-2 transition duration-300
                ${attempted
                        ? "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-white border-gray-200 hover:border-indigo-500 hover:bg-indigo-50"
                    }
      `}
            >
                {text}
            </button>
        </div>
    )
}


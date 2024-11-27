import React from 'react'

export default function ICPaintBrush(props) {

    const {strokeColor = '#221b38', fillColor = '#7D55FF'} = props;
    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="0" stroke={strokeColor} fill="#C4B6FF"
                      d="M20 2H4V8H20V2Z" transform="translate(2,2)"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke={strokeColor} fill="none"
                      d="M20 2H4V8H20V2Z"></path>
                <path strokeLinejoin="round" strokeLinecap="square" strokeWidth="1" stroke={strokeColor}
                      d="M9 2V4"></path>
                <path strokeLinejoin="round" strokeLinecap="square" strokeWidth="1" stroke={strokeColor}
                      d="M14 2V5"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="0" stroke={strokeColor} fill={fillColor}
                      d="M8.51 12H5C4.45 12 4 11.55 4 11V8H20V11C20 11.55 19.55 12 19 12H15.51C14.63 12 13.91 12.72 13.91 13.6C13.92 14.62 14.05 15.64 14.29 16.64C14.49 17.44 15 18.28 15 19.1C15 19.96 14.62 20.73 14 21.26C13.47 21.72 12.77 22 12 22C11.23 22 10.53 21.72 10 21.26C9.38 20.73 9 19.96 9 19.1C9 18.28 9.51 17.44 9.71 16.64C9.95 15.64 10.08 14.62 10.09 13.6V13.57C10.09 12.7 9.38 12 8.51 12Z"
                      transform="translate(2,2)"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke={strokeColor} fill="none"
                      d="M8.51 12H5C4.45 12 4 11.55 4 11V8H20V11C20 11.55 19.55 12 19 12H15.51C14.63 12 13.91 12.72 13.91 13.6C13.92 14.62 14.05 15.64 14.29 16.64C14.49 17.44 15 18.28 15 19.1C15 19.96 14.62 20.73 14 21.26C13.47 21.72 12.77 22 12 22C11.23 22 10.53 21.72 10 21.26C9.38 20.73 9 19.96 9 19.1C9 18.28 9.51 17.44 9.71 16.64C9.95 15.64 10.08 14.62 10.09 13.6V13.57C10.09 12.7 9.38 12 8.51 12Z"></path>
            </svg>
        </>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { setLightTheme, setDarkTheme } from '../features/themeSlice';

function toggelTheme() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(setLightTheme())}>Light
                Theme</button>
            <button onClick={() => dispatch(setDarkTheme())}>Dark Theme</button>
        </div>
    )
}

export default toggelTheme
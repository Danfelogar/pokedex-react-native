import { useState, useEffect } from "react"

export const useDebouncedValue = ( input: string ='', time: number = 500 ) => {

    const [debouncedValue, setDebouncedValue] = useState(input);
    // este es el dibounce cada vez que el input cambia llama un nuevo timeont y el anterior es limpiado
    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedValue( input );
        }, time);
        // el return dentro de un useEffect se encar de elaizar una limpieza
        return () => {
            clearTimeout( timeout );
        }

    }, [input])

    return debouncedValue
}

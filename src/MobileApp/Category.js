import React from 'react'
import { useParams } from 'react-router';
export default function Category() {
    let {category} = useParams();
    return (
        <div>
            {category} 
        </div>
    )
}

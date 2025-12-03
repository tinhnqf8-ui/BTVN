import React from 'react'
import { Link } from 'react-router'

function ItemResult({ link, title, imgUrl }: { link: string, title: string, imgUrl: string }) {
    return (
        <li >
            <Link to={link} className='flex gap-2 items-center text-sm py-2 cursor-pointer'>
                <img src={imgUrl} alt="img exam" className='w-8 h-8 rounded-full object-cover' />
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default ItemResult
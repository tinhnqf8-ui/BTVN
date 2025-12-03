import React from 'react'
import { Link } from 'react-router'

function ListResult({ title, link, children }: { title: string, link: string,children: React.ReactNode }) {
    return (
        <ul>
            <div className='flex justify-between border-b border-gray-200 py-2'>
                <p className='text-sm uppercase font-semibold '>
                    {title}
                </p>
                <div>
                    <Link to={link} className='text-gray-600  hover:text-red-400 text-sm'>
                        Xem thêm
                    </Link>
                </div>
            </div>
            {children}
        </ul>
    )
}

export default ListResult
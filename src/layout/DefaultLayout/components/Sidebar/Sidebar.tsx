import { faAffiliatetheme } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router'

function Sidebar() {
    return (
        <div className='w-[95px]'>
            <ul>
                <li>
                    <Link to={'bai-37'} className='flex flex-col gap-2 font-bold items-center p-3 m-2 hover:bg-gray-300 rounded-lg'>
                        <FontAwesomeIcon icon={faAffiliatetheme} />
                        Bài 37
                    </Link>
                </li>
                <li>
                    <Link to={'bai-38'} className='flex flex-col gap-2 font-bold items-center p-3 m-2 hover:bg-gray-300 rounded-lg'>
                        <FontAwesomeIcon icon={faAffiliatetheme} />
                        Bài 38
                    </Link>
                </li>
                <li>
                    <Link to={'bai-39'} className='flex flex-col gap-2 font-bold items-center p-3 m-2 hover:bg-gray-300 rounded-lg'>
                        <FontAwesomeIcon icon={faAffiliatetheme} />
                        Bài 39
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
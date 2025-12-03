import clsx from 'clsx'
import React from 'react'

function ModalList({ children, classAdd }: { children: React.ReactNode, classAdd: string }) {
    return (
        <div className={clsx("absolute top-[50px] px-3 py-2 bg-white shadow-2xl rounded-md max-h-[90vh] overflow-y-auto",
            classAdd)}>
            {children}
        </div>
    )
}

export default ModalList
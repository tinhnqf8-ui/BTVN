import React, { useEffect, useState } from "react";

function Modal({
    isOpen = false,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS,
    overlayClassName,
    className,
    bodyOpenClassName,
    htmlOpenClassName,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    children,
}: {
    isOpen: boolean;
    onAfterOpen?: () => void;
    onAfterClose?: () => void;
    onRequestClose?: () => void;
    closeTimeoutMS?: number;
    overlayClassName?: string;
    className?: string;
    bodyOpenClassName?: string;
    htmlOpenClassName?: string;
    shouldCloseOnOverlayClick?: boolean;
    shouldCloseOnEsc?: boolean;
    children: React.ReactNode;
}) {
    useEffect(() => {
        if (isOpen && onAfterOpen) {
            onAfterOpen();
        }
    }, [isOpen]);
    return (
        <>
            {isOpen && <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 z-[999] flex items-center justify-center">
                <div className="Modal absolute bg-white p-4 z-[1000] min-h-14">
                    <div className="header bg-red-600" onClick={onRequestClose}>CLOSE</div>
                    {children}
                </div>
            </div>
            }
        </>
    );
}

export default Modal;

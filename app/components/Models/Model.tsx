'use client';
import exp from "constants"
import { on } from "events";
import { useEffect } from "react";
import * as React from 'react';

interface ModelProps {
    isOpen: boolean;    
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryActionLabel?: () => void;
    secondaryLabel?: string;

}

const Model: React.FC<ModelProps> = ({isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryActionLabel,
    secondaryLabel}) => {
        const [showModel, setShowModel] = React.useState(isOpen);

        useEffect   (() => {
        setShowModel(isOpen);
        },[isOpen]);
    
        const handleOnClose = React.useCallback(() => {
            if(disabled) return;
            setShowModel(false);
            setTimeout(() => {
                onClose();
            } , 300);
        }, [disabled, onClose]);
    return (
        <div>
            
        </div>
    )
}
export default Model
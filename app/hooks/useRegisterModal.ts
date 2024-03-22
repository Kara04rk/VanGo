import exp from 'constants';
import {create} from 'zustand';

interface RegisterModalState { 
    isOpen: boolean;
    Onopen: () => void;
    Onclose: () => void;
}

const useRegisterModal = create<RegisterModalState>((set) => ({
    isOpen: false,
    Onopen: () => set({isOpen: true}),
    Onclose: () => set({isOpen: false}),

}));

export default useRegisterModal;
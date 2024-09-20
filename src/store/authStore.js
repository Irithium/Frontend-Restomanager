import {create} from 'zustand';

const initialState = JSON.parse(localStorage.getItem('auth')) || { email: '', accessToken: '' };

const useAuthStore = create((set) => ({
    auth: initialState,
    setAuth: (auth) => {
        console.log('Auth setting in store:', auth);
        set({ auth });
        localStorage.setItem('auth', JSON.stringify(auth)); 
    },
    clearAuth: () => {
        set({ auth: { email: '', accessToken: '' } });
        localStorage.removeItem('auth'); 
    },
}));

export default useAuthStore;

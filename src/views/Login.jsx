import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../utils/axiosConfig';
import useAuthStore from '../store/authStore';

const LOGIN_URL = '/auth/login';

const ERROR_MESSAGES = {
    SERVER_UNRESPONSIVE: 'El servidor no responde',
    EMAIL_OR_PASSWORD: 'Se perdió el email o contraseña',
    UNAUTHORIZED: 'No tiene autorización, contacte al proveedor del servicio',
    LOGIN_FAILED: 'Ingreso fallido'
};

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setError('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosConfig.post(LOGIN_URL, JSON.stringify({ email, password }), {
                headers: { 'Content-Type': 'application/json' },
            });
    
            const accessToken = response?.data?.token;  
            console.log('Access token:', accessToken); 
    
            if (accessToken) {
                setAuth({ email, accessToken });
                localStorage.setItem('auth', JSON.stringify({ email, accessToken }));
                setEmail('');
                setPassword('');
                setSuccess(true);
            } else {
                throw new Error('Token no recibido');
            }
        } catch (err) {
            if (!err?.response) {
                setError(ERROR_MESSAGES.SERVER_UNRESPONSIVE);
            } else if (err.response?.status === 400) {
                setError(ERROR_MESSAGES.EMAIL_OR_PASSWORD);
            } else if (err.response?.status === 401) {
                setError(ERROR_MESSAGES.UNAUTHORIZED);
            } else {
                setError(ERROR_MESSAGES.LOGIN_FAILED);
            }
            errRef.current.focus();
        }
    };
       
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate("/panel", { replace: true });
            }, 2000); 

            return () => clearTimeout(timer); 
        }
    }, [success, navigate]);

    return (
        <>
            {success ? (
                <section className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center">
                    <h1 className="text-3xl font-bold text-green-700 mb-4">Inicio de sesión exitoso</h1>
                    <p>Redirigiendo a la página principal...</p>
                </section> 
            ) : (
                <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <p
                        ref={errRef}
                        className={`text-red-600 mb-4 ${error ? 'block' : 'hidden'}`}
                        aria-live="assertive"
                    >
                        {error}
                    </p>
                    <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Correo</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="password" className="block text-gray-700 mt-4 mb-2">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            Enviar
                        </button>
                        <p className="mt-4 text-center">
                            ¿No tienes una cuenta? <br />
                            <a href="/registro" className="text-blue-600 hover:underline">Registrarse</a>
                        </p>
                    </form>
                </section>
             )} 
        </>
    );
};

export default Login;

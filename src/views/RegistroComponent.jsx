import { useRef, useState, useEffect } from "react";
import axiosConfig from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/auth/register';

const Registro = () => {
    const userRef = useRef();
    const emailRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPdw] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validName || !validEmail || !validPwd || !validMatch) {
            setErrMsg('Ingreso inválido');
            return;
        }
        try {
            const response = await axiosConfig.post(REGISTER_URL, 
                JSON.stringify({ nombre: user, password: pwd, email }), 
                { headers: { 'Content-Type': 'application/json' } }
            );         
            console.log(response.data); 
            setSuccess(true);
            setErrMsg(''); 
        } catch (err) {
            if (!err?.response) {
                setErrMsg('El servidor no responde');
            } else if (err.response?.status === 409) {
                setErrMsg('El usuario ya existe');
            } else {
                setErrMsg('Registro fallido');
            }
            errRef.current.focus();
        }
    };
    

    return (
        <>
            {success ? (
                <section className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center">
                    <h1 className="text-3xl font-bold text-green-700">Registro exitoso</h1>
                    <p className="mt-4">
                    <a  
                            onClick={() => navigate('/login')}
                            className="text-blue-600 hover:underline"
                        >
                            Ingresar al sitio
                        </a>
                    </p>
                </section>
            ) : (
                <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <p 
                        ref={errRef} 
                        className={`text-red-600 mb-4 ${errMsg ? 'block' : 'hidden'}`} 
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <h1 className="text-2xl font-bold mb-6">Registro</h1>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                        <label htmlFor="username" className="block text-gray-700 mb-2">
                            Nombre
                        </label>
                        <input 
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p 
                            id="uidnote" 
                            className={`text-sm text-red-600 mt-2 ${userFocus && user && !validName ? 'block' : 'hidden'}`}
                        >
                            El nombre debe tener entre 3 y 24 caracteres, solo letras y guiones bajos.
                        </p>

                        <label htmlFor="email" className="block text-gray-700 mt-4 mb-2">
                            Correo
                        </label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="example@example.com"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p 
                            id="emailnote" 
                            className={`text-sm text-red-600 mt-2 ${emailFocus && email && !validEmail ? 'block' : 'hidden'}`}
                        >
                            Debes ingresar un correo válido.
                        </p>

                        <label htmlFor="password" className="block text-gray-700 mt-4 mb-2">
                            Contraseña
                        </label>
                        <input 
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p 
                            id="pwdnote" 
                            className={`text-sm text-red-600 mt-2 ${pwdFocus && !validPwd ? 'block' : 'hidden'}`}
                        >
                            La contraseña debe tener entre 8 y 24 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial.
                        </p>

                        <label htmlFor="confirm_pwd" className="block text-gray-700 mt-4 mb-2">
                            Confirmación de Contraseña
                        </label>
                        <input 
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPdw(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p 
                            id="confirmnote" 
                            className={`text-sm text-red-600 mt-2 ${matchFocus && !validMatch ? 'block' : 'hidden'}`}
                        >
                            Las contraseñas deben coincidir.
                        </p>

                        <button 
                            disabled={!validName || !validPwd || !validMatch} 
                            className="w-full mt-6 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            Registrarse
                        </button>

                        <p className="mt-4 text-center">
                            ¿Ya estás registrado? <br />
                            <a href="/login" className="text-blue-600 hover:underline">Ingresar a la página</a>
                        </p>
                    </form>
                </section>
            )}
        </>
    );
};

export default Registro;

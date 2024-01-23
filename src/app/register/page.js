'use client';

import Image from "next/image";
import { useState } from "react";

export default function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    async function handleFormSubmit(ev){
        ev.preventDefault();
        setCreatingUser();
        try {
            await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: { 'Content-Type': 'application/json'}
            });
            setCreatingUser(false);
            setUserCreated(true);
        }catch (e) {
            setError(true);
        }

    }
    return (
       <section className="mt-8">
           <h1 className="text-center text-primary text-4xl">
               Cadastro
           </h1>
           <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
               <input
                   type="email"
                   placeholder="email" value={email}
                   onChange={ ev => setEmail(ev.target.value)}
               />
               <input
                   type="password"
                   placeholder="password"
                   value={password}
                   onChange={ ev => setPassword(ev.target.value)}
               />

               <button type="submit">Cadastrar</button>
               <div className="my-4 text-center text-purple-950">
                   faça login com um provedor
               </div>
               <button className="flex gap-4 justify-center">
                   <Image src={'/google.png'} alt={'google icon'} width={24} height={24}/>
                   Entrar com Google
               </button>
           </form>
       </section>
    );
}
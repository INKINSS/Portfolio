import React from 'react';
import '../styles/components/main.scss';
import Typewriter from 'typewriter-effect'


export const Main = () => {
    return (
        <main>
            <section className='aboutMe'>
                <h4>Hola!, soy </h4>
                <h1>Samuel Perez</h1>
                <h2>
                    DESARROLLADOR
                    <span className='message'>
                        <Typewriter className='message'
                            options={{
                                strings: ['FrontEnd', 'con JavaScript', 'con React'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h2>
                <p className='frase'>¿Quieres una aplicación web moderna y atractiva? Déjame ayudarte a alcanzar tus metas con JavaScript y React."</p>
                <button id='buttonContact' type='submit'>comenzar</button>
            </section>
        </main>
    )
}

import React, { useState } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';



const PasswordReset = () => {
  const { resetPassword, validMails} = UserAuth();
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  function validarEmail(email) {
    // Expresión regular para validar el formato de un correo electrónico
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Comprobar si el correo electrónico coincide con la expresión regular
    return regex.test(email);
  };


  function buscarPorMail(array, correo) {
    //comprobar si el mail introducido figura en la bade de datos como autorizado
    return array.findIndex(objeto => objeto.mail === correo);
  }

  const handleResetPassword = async () => {
    if(validarEmail(email) && buscarPorMail(validMails, email) !== -1){
      setResetSent(await resetPassword(email))
    } else {
      alert("Su email no figura en la base de datos")
    }
  };
  

  return (
    <section>
      <h2>Recuperar Contraseña</h2>
      <article id="reset">
        {resetSent ? (
          <>
          <p>Se ha enviado un correo electrónico a <b>{email}</b> con instrucciones para restablecer tu contraseña.</p>
          <button ><Link to ="/" >Volver</Link></button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '200px',
                height: '25px',
                marginBottom: '15px',
              }}
            />
            <button onClick={handleResetPassword}>Enviar correo de recuperación</button>
          </>
        )}
      </article>
    </section>
  );
};

export default PasswordReset;

import React, { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { setDoc, updateDoc, deleteDoc, doc, collection } from "firebase/firestore";
import { firestore } from "../../../config/firebaseAuth";
import Breadcrumb from "../Breadcrum/Breadcrum";

const Users = () => {
  const { rol, validMails, setValidMails, emailPasswordSignUp } = UserAuth();
  const [elegido, setElegido] = useState('');
  const [newUserMail, setNewUserMail] = useState('');
  const [admin, setAdmin] = useState(false);
  const [newUserPassword, setNewUserPassword] = useState('');
  const [editUser, setEditUser] = useState('');
  const [editAdmin, setEditAdmin] = useState(false);

  const handleUserChange = (e) => {
    setElegido(e.target.value);
  }

  const handleNewUserMailChange = (e) => {
    setNewUserMail(e.target.value);
  }

  const handleAdminChange = (e) => {
    setAdmin(e.target.value === 'true');
  }

  const handleNewUserPasswordChange = (e) => {
    setNewUserPassword(e.target.value);
  }

  const handleEditUserChange = (e) => {
    setEditUser(e.target.value);
  }

  const handleEditAdminChange = (e) => {
    setEditAdmin(e.target.value === 'true');
  }

  const addUser = async () => {
    const newUser = {
      mail: newUserMail,
      admin: admin
    };

    try {
      const usersCollection = collection(firestore, 'users');
      const userDoc = doc(firestore, "users", newUserMail);
      await setDoc(userDoc, newUser);
      alert('Usuario agregado exitosamente');
      setValidMails([...validMails, newUser]);
      await emailPasswordSignUp(newUserMail, newUserPassword);
    } catch (error) {
      if (error.code === 'already-exists') {
        alert('El usuario ya existe');
      } else {
        alert('Error al agregar usuario: ' + error.message);
      }
    }
  };

  const updateUser = async () => {
    const editedUser = {
      mail: editUser,
      admin: editAdmin
    };
    try {
      const userDoc = doc(firestore, 'users', editUser);
      await updateDoc(userDoc, editedUser);
      alert('Usuario actualizado exitosamente');
      setValidMails([...validMails.filter(element => element.mail !== editedUser.mail), editedUser]);
    } catch (error) {
      alert('Error al actualizar usuario: ' + error.message);
    }
  };

  const deleteUser = async () => {
    if (window.confirm('¿Está seguro que desea borrar el usuario? Esta acción no es reversible.')) {
      try {
        const userDoc = doc(firestore, 'users', elegido);
        await deleteDoc(userDoc);
        alert('Usuario eliminado exitosamente');
        setValidMails(validMails.filter(element => element.mail !== elegido));
      } catch (error) {
        alert('Error al eliminar usuario: ' + error.message);
      }
    }
  };

  return (
    <>
      {rol &&
        <>
          <Breadcrumb />
          <section className="main-container">

            <article className="tableUsers">
              <h1>Panel de administración de usuarios</h1>
              <table>
                <thead>
                  <tr>
                    <th>Mail</th>
                    <th>Permisos de Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {validMails.map((user, index) => (
                    <tr key={index}>
                      <td>{user.mail}</td>
                      <td>{user.admin ? 'Si' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
            <article className="crudContainer">
              <div className="actionCrud">
                <h3>Borrar</h3>
                <select name="borrar" id="borrar" onChange={handleUserChange}>
                  <option>Borrar un usuario</option>
                  {validMails.map((user, index) => (
                    <option key={index} value={user.mail}>{user.mail}</option>
                  ))}
                </select>
                <button onClick={deleteUser}>Eliminar</button>

              </div >
              <div className="actionCrud">
                <h3>Editar</h3>
                <select name="editUser" id="editUser" onChange={handleEditUserChange}>
                  <option>Editar un usuario</option>
                  {validMails.map((user, index) => (
                    <option key={index} value={user.mail}>{user.mail}</option>
                  ))}
                </select>
                 <p>Permisos de Admin:
                <label>
                  <input type="radio" name="editAdmin" value="true" onChange={handleEditAdminChange} required />
                  Si
                </label>
                <label>
                  <input type="radio" name="editAdmin" value="false" onChange={handleEditAdminChange} required />
                  No
                </label>
                </p> 
                <button onClick={updateUser}>Editar</button>
              </div>

              <div className="actionCrud">
                <h3>Nuevo usuario</h3>
                <input type="email" name="newUserMail" id="newUserMail" placeholder="Nuevo usuario mail" onChange={handleNewUserMailChange} />
                <input name="newUserPassword" id="newUserPassword" placeholder="Nueva contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="La contraseña debe contener al menos 8 caracteres, una mayúscula y un número" onChange={handleNewUserPasswordChange} />
                <p>
                  Permisos de Admin:
                  <label>
                    <input type="radio" name="admin" value="true" onChange={handleAdminChange} required />
                    Si
                  </label>
                  <label>
                    <input type="radio" name="admin" value="false" onChange={handleAdminChange} required />
                    No
                  </label>
                </p>
                <button onClick={addUser}>Añadir</button>
              </div>
            </article>
          </section>
        </>
      }
      {!rol &&
        <section className="main-container">
          <p>Acceso denegado</p>
        </section>
      }
    </>
  )
};

export default Users;

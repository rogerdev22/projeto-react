// Hoje 13/10/2022 revisando a aula 01 - Cadastrando novos usuarios 
// hoje 21/10/2022 usando react hook :useEffect
// hoje 21/10/2022 montando a tela 2 pasta container\uses

import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
   User ,

} from "./styles";

import Avatar from '../assets/avatar.svg' 
import Arrow from '../assets/arrow.svg'
import Trash from '../assets/trash.svg'


function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3000/users");
      setUsers(newUsers);
      
    }

    fetchUsers()
  }, [])

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3000/users/${userid}`);
    
    const newUsers = users.filter((user) => user.id !== userid)
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />

      <ContainerItens>

        <H1>Usuários</H1>
        <ul>

          {users.map((user) => (

            <User key={user.id} >

              <p>{user.name}</p> <p> {user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixo" />
              </button>
            </User>
          ))}
        </ul>


        <Button to="/" >
          <img alt="Seta" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>

  );
}
export default Users;
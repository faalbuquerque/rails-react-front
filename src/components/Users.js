import React from "react";

const Users = (props) =>{
  return(
    <div>
      <h2>Listagem</h2>
      {
        props.usersList.map((user)=>{
          return(
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Users;

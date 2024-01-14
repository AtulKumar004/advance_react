import React from "react";

const DataTable = ({ handleSubmit, allUserData, newUser, setNewUser }) => {
  // {
  //     id: 3,
  //     name: "The Little Prince",
  //     pages: 85,
  //     title: "Antoine de Saint-Exupéry",
  //     price: 7.99,
  //   },

  return (
    <>
      <div style = {{ padding: "5rem 6rem" }}>
        <label>Add New User</label>
        <hr />
        <div style = {{ display:"flex" , alignItems:"center" }}>
          <div  style = {{ display:"flex", flexDirection:"column" , gap: "0.5rem", flex: "1" , alignItems:"flex-start"  , border: "0.5px solid gray" }}>
            <label>Name:</label>
            <input
              value={newUser?.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </div>
          <div style = {{ display:"flex", flexDirection:"column" , gap: "0.5rem", flex: "1" , alignItems:"flex-start"  , border: "0.5px solid gray" }}>
            <label>Title :</label>
            <input
              value={newUser?.title}
              onChange={(e) =>
                setNewUser({ ...newUser, title: e.target.value })
              }
            />
          </div>
          <div style = {{ display:"flex", flexDirection:"column" , gap: "0.5rem", flex: "1" , alignItems:"flex-start"  , border: "0.5px solid gray" }}>
            <label>Pages :</label>
            <input
              value={newUser?.pages}
              type="number"
              onChange={(e) =>
                setNewUser({ ...newUser, pages: Number(e.target.value) })
              }
            />
          </div>
          <div style = {{ display:"flex", flexDirection:"column" , gap: "0.5rem", flex: "1" , alignItems:"flex-start"  , border: "0.5px solid gray" }}>
            <label>Price :</label>
            <input
              value={newUser?.price}
             
              type="number"
              step="0.01"
              onChange={(e) =>
                setNewUser({ ...newUser, price: parseFloat(e.target.value) })
              }
            />
          </div>
        </div>
        <div>
        <button onClick = {handleSubmit}>Add User </button>
        </div>
        <hr  />

        <div>
        <table>
        <thead>
          <tr >
            <th>Name</th>
            <th>Pages</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {allUserData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.pages}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;

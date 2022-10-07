const {getAllUsers, getUserByID, createUser} = require("./users.controllers");

const getUsers = (req, res) => {
  const data = getAllUsers();

  res.status(200).json(data);
};

const getUser = (req, res) => {
  const id = req.params.id;

  const data = getUserByID(id);

  if(data) {
    res.status(200).json(data);
  } else {
    res.status(400).json({id: id, message: "Invalid ID"});
  }
};

const createNewUser = (req, res) => {
  const data = req.boby;

  if(data.firstName && data.lastName && data.email && data.password && data.birthday) {
    const data = createUser();

    res.status(201).json(data);
  } else {
    res.status(400);
  }
};

/*
only to prove the function createNewUser (post)
{
  "firstName": "Elena",
  "lastName": "Garro",
  "email": "elga@yahoo.com",
  "password": "HteQ34#45&",
  "birthday": "1916-12-11"
}
*/
module.exports = {
  getUsers,
  getUser,
  createNewUser
};
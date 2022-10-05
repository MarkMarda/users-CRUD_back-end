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
  const {first_name, last_name, email, password, birthday} = req.boby;

  if(first_name && last_name && email && password && birthday) {
    const data = createUser();

    res.status(201).json(data);
  } else {
    res.status(400);
  }
};

module.exports = {
  getUsers,
  getUser,
  createNewUser
};
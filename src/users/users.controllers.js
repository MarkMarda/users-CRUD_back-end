const uuid = require("uuid");

const usersDB = [
  {
    id: "002dee28-8916-4cf3-92a9-65ea1d51042b",
    first_name: "Orhan",
    last_name: "Pamuk",
    email: "orhma@gmail.com",
    password: "$Trewd#22=5",
    birthday: "1965-04-23"
  },
  {
    id: "5468677d-f9f5-4598-b56c-be8231ef41a4",
    first_name: "Karl",
    last_name: "Knausgård",
    email: "knausk@hotmail.com",
    password: "78TwqQ@#45&",
    birthday: "1968-12-06"
  },
  {
    id: "517c67d7-2f8a-45fa-a40e-ad36b677364e",
    first_name: "Jane",
    last_name: "Austen",
    email: "janaus@yahoo.com",
    password: "kint%W#898/6",
    birthday: "1775-12-16"
  },
  {
    id: "1860a949-86b5-40c7-bab6-8b6fa3f2daf7",
    first_name: "Harry",
    last_name: "Mulisch",
    email: "hamul@hotmail.com",
    password: "#45@ytri678",
    birthday: "1927-07-29"
  },
  {
    id: "d1f07b53-8b04-4648-b595-9ff731a00e31",
    first_name: "Olga",
    last_name: "Tokarczuk",
    email: "tokarol@gmail.com",
    password: "jun$rer#981",
    birthday: "1962-01-29"
  },
];

const getAllUsers = () => {
  return usersDB;
};

const getUserByID = (id) => {
  const data = usersDB.find(user => user.id === id);

  return data;
};

const createUser = (data) => {
  const newUser = {
    id: uuid.v4(),
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    password: data.password,
    birthday: data.birthday
  };
  
  usersDB.push(newUser);

  return newUser;
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser
};

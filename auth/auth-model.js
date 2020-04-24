const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy
};

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  
  const [id] = await db("users").insert(user);
  console.log("model",id);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
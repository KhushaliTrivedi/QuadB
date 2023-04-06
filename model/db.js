const {Client} = require('pg');

const client = new Client('postgres://quadb_user:h0zZgfLQzPyVnRi6oEYsNI48WNF4HViZ@dpg-cgn5qvndvk4k0101cbj0-a/quadb?ssl=true');

client.connect();

module.exports = client;
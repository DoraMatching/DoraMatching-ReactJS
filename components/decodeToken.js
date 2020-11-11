const cookie = require('js-cookie')
const jwt = require('jsonwebtoken')
const token = cookie.get('token')
// decode token
// const tokentest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiMzI3YmIyLWQ0ZmQtNGQ4MC1iMmU2LTM1YTgzZDcxZjc0YyIsInVzZXJuYW1lIjoiaW5zdGFncmFtIiwicm9sZXMiOlsiVFJBSU5FRSJdLCJlbWFpbCI6Imluc3RhZ3JhbUBnbWFpbC5jb20iLCJpYXQiOjE2MDUwODA4NTAsImV4cCI6MTYwNTE2NzI1MH0.CYkYVhd4oTJi4S8cnZrsQPHZxSi6kNUsL0-vLN5h67A'
const profile = jwt.decode(token);
console.log(profile)
const { connectDB, mongoClose } = require('./connection');

const User = require('./models/User');

module.exports = {
    connectDB, mongoClose, User
};
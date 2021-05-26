const { connectDB, mongoClose } = require('./connection');

const User = require('./models/User');
const Skill = require('./models/Skill');
const Vacancy = require('./models/Vacancy');
const Position = require('./models/Position');
const Employee = require('./models/Employee');

module.exports = {
    connectDB, mongoClose, User, Skill, Vacancy, Position, Employee
};
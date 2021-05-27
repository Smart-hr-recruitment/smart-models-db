const { connectDB, mongoClose } = require('./connection');

const User = require('./models/User');
const Vacancy = require('./models/Vacancy');
const Position = require('./models/Position');
const Employee = require('./models/Employee');
const VacancySkill = require('./models/VacancySkill');
const PositionSkill = require('./models/PositionSkill');
const EmployeeSkill = require('./models/EmployeeSkill');


module.exports = {
    connectDB, mongoClose, 
    User, Vacancy, Position, Employee,
    VacancySkill, PositionSkill, EmployeeSkill
};
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    personalDetails: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    employmentDetails: {
        jobTitle: { type: String, required: true },
        department: { type: String, required: true },
        startDate: { type: Date, required: true },
        employmentType: { type: String, enum: ['Full-Time', 'Part-Time', 'Contract'], required: true }
    },
    salary: {
        baseSalary: { type: Number, required: true },
        bonuses: { type: Number, default: 0 },
        deductions: { type: Number, default: 0 }
    },
    bankInformation: {
        bankName: { type: String, required: true },
        accountNumber: { type: String, required: true },
        routingNumber: { type: String, required: true }
    }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
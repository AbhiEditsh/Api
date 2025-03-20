const mongoose = require("mongoose");

const employmentSchema = new mongoose.Schema({
  // Personal Information
  employeeName: String, // Full name of the employee
  employeeId: String, // Unique ID for the employee
  gender: String, // Gender of the employee
  dateOfBirth: String, // Date of birth (can use Date type if needed)
  contactNumber: String, // Primary phone number
  emergencyContact: String, // Emergency contact number

  // Employment Details
  department: String, // Department name
  designation: String, // Job title/designation
  dateOfJoining: String, // Date of joining (can use Date type if needed)
  reportingManager: String, // Name of the reporting manager
  workLocation: String, // Work location or branch

  // Salary Details
  basicSalary: Number, // Basic salary amount
  allowances: [String], // Array of allowances (e.g., HRA, transport allowance)
  deductions: Number, // Total deductions
  netSalary: Number, // Net salary after deductions

  // Skills and Qualifications
  qualifications: [String], // Array of qualifications (e.g., B.Tech, MBA)
  skills: [String], // Array of skills (e.g., JavaScript, React)
});

module.exports = mongoose.model("Employment", employmentSchema);
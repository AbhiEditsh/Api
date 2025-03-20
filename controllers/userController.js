const Employment = require("../models/userModel");

// Create Employment Record (POST)
exports.createEmployment = async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      gender,
      dateOfBirth,
      contactNumber,
      emergencyContact,
      department,
      designation,
      dateOfJoining,
      reportingManager,
      workLocation,
      basicSalary,
      allowances,
      deductions,
      netSalary,
      qualifications,
      skills,
    } = req.body;

    // Validation
    if (!employeeName || !employeeId || !gender || !dateOfBirth || !contactNumber) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const employment = new Employment({
      employeeName,
      employeeId,
      gender,
      dateOfBirth,
      contactNumber,
      emergencyContact,
      department,
      designation,
      dateOfJoining,
      reportingManager,
      workLocation,
      basicSalary,
      allowances,
      deductions,
      netSalary,
      qualifications,
      skills,
    });

    await employment.save();
    res.status(201).json({
      message: "Employment record created successfully",
      employment: employment,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Employment Records (GET)
exports.getEmployments = async (req, res) => {
  try {
    const employments = await Employment.find();
    res.status(200).json({
      message: "Employment records retrieved successfully",
      employments: employments,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Employment Record (GET)
exports.getEmploymentById = async (req, res) => {
  try {
    const employment = await Employment.findById(req.params.id);
    if (!employment) return res.status(404).json({ message: "Employment record not found" });
    res.status(200).json({
      message: "Employment record retrieved successfully",
      employment: employment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Employment Record (PUT)
exports.updateEmployment = async (req, res) => {
  try {
    const updatedEmployment = await Employment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployment) return res.status(404).json({ message: "Employment record not found" });
    res.status(200).json({
      message: "Employment record updated successfully",
      employment: updatedEmployment,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Employment Record (DELETE)
exports.deleteEmployment = async (req, res) => {
  try {
    const employment = await Employment.findByIdAndDelete(req.params.id);
    if (!employment) return res.status(404).json({ message: "Employment record not found" });
    res.status(200).json({ message: "Employment record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
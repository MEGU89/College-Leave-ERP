const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  collegeId: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  typeOfLeave: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  totalDays: {
    type: Number,
    require: true,
  },
  reason: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"], // Restricts the possible values
    default: "Pending", // Sets a default value
  },

  //  document:{
  //     type:String,
  //     require:true
  //  }
});

mongoose.model("LEAVEINFO", applicationSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    jobId: String,
    companyName: String,
    jobTitle: String,
    jobLink: String,
    batch: Array,
    isReferral: String,
    jobExpiry: { type: Date },
    postedOn: { type: Date, default: Date.now },
    postedBy: String,
    postedById: String,
    jobDesciption: String,
    likers: Array,
    likersCount: { type: Number, default: 0 },
    role: Array,
    isDeleted: { type: Boolean, default: false },
    lastModified: { type: Date, default: Date.now },
    salary: String
});

mongoose.model('jobs', jobSchema);

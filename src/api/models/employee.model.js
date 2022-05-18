import mongoose from 'mongoose'


/**
 * Employee Schema
 * @private
 */
const employeeSchema = new mongoose.Schema({
    _id:       false,
    id:        {
        type:     Number,
        required: true,
        unique:   true
    },
    firstName: {
        type: String,
    },
    lastName:  {
        type: String,
    },
    email:     {
        type:      String,
        match:     /^\S+@\S+\.\S+$/,
        required:  true,
        unique:    true,
        trim:      true,
        lowercase: true,
    },
    password:  {
        type:      String,
        required:  true,
        minlength: 6,
        maxlength: 128,
    },
    startDate: {
        type:     Date,
        required: true,
    },
    managerId: {
        type: Number,
    },
    role:      {
        type:     String,
        required: true
    }
})


/**
 * Statics
 */
employeeSchema.statics = {
    /**
     * List users in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @returns {Promise<User[]>}
     */
    list({page = 1, perPage = 30}) {
        return this.find()
            .sort({id: 1})
            .skip(perPage * (page - 1))
            .limit(perPage)
            .exec()
    },
}

/**
 * @typedef User
 */
export default mongoose.model('Employee', employeeSchema)

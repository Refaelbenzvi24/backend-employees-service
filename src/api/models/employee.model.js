import mongoose from 'mongoose'


/**
 * Employee Schema
 * @private
 */
const employeeSchema = new mongoose.Schema({
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
        type:     String,
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
     * List users in descending order of 'id' value.
     * @returns {Promise<User[]>}
     */
    list() {
        return this.find()
            .sort({id: 1})
            .exec()
    }
}

/**
 * @typedef User
 */
export default mongoose.model('Employee', employeeSchema)

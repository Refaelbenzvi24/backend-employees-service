import Employee from '../models/employee.model'


/**
 * Returns return user data if email and password are valid.
 * @public
 */
exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.query
        const employee          = await Employee.findOne({email})

        if (!employee) {
            return res.status(401).json({
                error: 'Employee not found!'
            })
        }

        if (employee.password !== password) {
            return res.status(401).json({
                error: 'Password incorrect'
            })
        }

        return res.status(200).json(employee)
    } catch (error) {
        return next(error)
    }
}


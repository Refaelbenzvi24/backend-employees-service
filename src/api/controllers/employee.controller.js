import Employee from "../models/employee.model";

export const list = async (req, res, next) => {
    try {
        const employees              = await Employee.list(req.query)

        res.json(employees)
    } catch (error) {
        next(error)
    }
}

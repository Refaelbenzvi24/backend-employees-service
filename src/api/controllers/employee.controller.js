import Employee from "../models/employee.model";

export const list = async (req, res, next) => {
    try {
        const employees = await Employee.list()

        res.json(employees)
    } catch (error) {
        next(error)
    }
}

import request from 'supertest'
import httpStatus from 'http-status'
import app from '../../src/index'
import Employee from "../../src/api/models/employee.model";
import EmployeesList from "../data/Employees.json";

describe('Employee Endpoint [API]', async () => {
    let stub

    beforeEach(async () => {
        stub = request(app)
        await Employee.deleteMany()

        for (let i = 0; i < EmployeesList.length; i++) {
            await Employee.create(EmployeesList[i])
        }
    })

    describe('GET /v1/employee', () => {
        it('should respond with 200', () => {
            return stub
                .get('/v1/employee')
                .expect(httpStatus.OK)
        })
    })
})

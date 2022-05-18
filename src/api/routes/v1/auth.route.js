import express from 'express'
import {validate} from 'express-validation'
import * as controller from '../../controllers/auth.controller'
import {login} from '../../validations/auth.validation'

const router = express.Router()


router.route('/login')
    /**
     * @api {post} v1/auth/login Login
     * @apiDescription Login with email and password
     * @apiVersion 1.0.0
     * @apiName Login
     * @apiGroup Auth
     * @apiPermission public
     *
     * @apiParam  {String}         email     Employee's email
     * @apiParam  {String{..128}}  password  Employee's password
     *
     *
     * @apiSuccess  {String}  Employee.id             Employee's id
     * @apiSuccess  {String}  Employee.firstName      Employee's firstName
     * @apiSuccess  {String}  Employee.lastName       Employee's lastName
     * @apiSuccess  {String}  Employee.email          Employee's email
     * @apiSuccess  {String}  Employee.password       Employee's password
     * @apiSuccess  {String}  Employee.startDate      Employee's startDate
     *
     * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
     * @apiError (Unauthorized 401)  Unauthorized     Incorrect email or password
     */
    .get(validate(login), controller.login)


export default router

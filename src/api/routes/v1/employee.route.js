import express from 'express'
import * as controller from '../../controllers/employee.controller'

const router = express.Router()

router.route('/')
    /**
     * @api {get} v1/employee List
     * @apiDescription Get an accessToken
     * @apiVersion 1.0.0
     * @apiName ListEmployees
     * @apiGroup Employee
     * @apiPermission public
     *
     * @apiSuccess {array}  List of employee.
     */
    .get(controller.list)


export default router

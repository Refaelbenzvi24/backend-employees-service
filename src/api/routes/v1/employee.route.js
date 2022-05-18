import express from 'express'
import * as controller from '../../controllers/employee.controller'

const router = express.Router()

router.route('/')
    /**
     * @api {get} v1/employee list
     * @apiDescription Get an accessToken
     * @apiVersion 1.0.0
     * @apiName Login
     * @apiGroup Auth
     * @apiPermission public
     *
     * @apiSuccess {array}      employees Employee's array
     */
    .get(controller.list)


export default router

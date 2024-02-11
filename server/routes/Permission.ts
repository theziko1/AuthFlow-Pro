import { Router } from "express";
import { createPermission , getPermissions , getPermissionById , updatePermission , deletePermission } from "../controllers/Permission";
import authorize from "../middlewares/User";

const PermissionRoutes = Router()
/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: CRUD of Permissions
 */

/**
 * @swagger
 * /permissions:
 *   post:
 *     summary: Create a new permission
 *     tags: [Permissions]
 *     description: Create a new permission with specified name and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Permission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Permission'
 *       '400':
 *         description: Permission with the same name already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       '401':
 *         description: Invalid permission data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 */
PermissionRoutes.post("/permission",authorize(['admin'],['write']),createPermission)
/**
 * @swagger
 * /permissions:
 *   get:
 *     summary: Get all permissions
 *     tags: [Permissions]
 *     description: Retrieve all permissions with their details.
 *     responses:
 *       '200':
 *         description: Permissions fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Permission'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 */
PermissionRoutes.get("/permissions",authorize([],['read']),getPermissions)
/**
 * @swagger
 * /permissions/{id}:
 *   get:
 *     summary: Get permission by ID
 *     tags: [Permissions]
 *     description: Retrieve a permission by its ID with its details.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the permission to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Permission found by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Permission'
 *       '404':
 *         description: Permission not found by provided ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 */

PermissionRoutes.get("/permission/:id",authorize([],['read']),getPermissionById)
/**
 * @swagger
 * /permissions/{id}:
 *   put:
 *     summary: Update a permission
 *     tags: [Permissions]
 *     description: Update a permission with specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the permission to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PermissionUpdate'
 *     responses:
 *       '200':
 *         description: Permission updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Permission'
 *       '404':
 *         description: Permission not found by provided ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 */
PermissionRoutes.put("/permission/:id",authorize(['admin'],['update']),updatePermission)
/**
 * @swagger
 * /permissions/{id}:
 *   delete:
 *     summary: Delete a permission
 *     tags: [Permissions]
 *     description: Delete a permission with specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the permission to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Permission deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       '404':
 *         description: Permission not found by provided ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 */
PermissionRoutes.delete("/permission/:id",authorize(['admin'],['delete']),deletePermission)


export default PermissionRoutes
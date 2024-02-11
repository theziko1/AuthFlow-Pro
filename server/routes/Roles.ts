import { Router } from "express";
import { AddRule ,GetRules ,  GetRule , UpdateRule , DeleteRule } from "../controllers/Roles";
import authorize from "../middlewares/User";

const RuleRoutes = Router()
/**
 * @swagger
 * tags:
 *   name: Rules
 *   description: CRUD of Rules
 */

/**
 * @swagger
 * /rules:
 *   post:
 *     summary: Add a new rule
 *     tags: [Rules]
 *     description: Add a new rule with specified name and permissions.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '201':
 *         description: Rule created successfully
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
 *         description: Invalid rule data
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
RuleRoutes.post("/rule",authorize(['admin'],['write']),AddRule)
/**
 * @swagger
 * /rules:
 *   get:
 *     summary: Get all rules
 *     tags: [Rules]
 *     description: Retrieve all rules with their permissions.
 *     responses:
 *       '200':
 *         description: Rules fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 RulesFound:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/RuleWithPermissions'
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
RuleRoutes.get("/rules",authorize([],['read']),GetRules)
/**
 * @swagger
 * /rules/{id}:
 *   get:
 *     summary: Get rule by ID
 *     tags: [Rules]
 *     description: Retrieve a rule by its ID with its permissions.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the rule to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Rule found by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 RuleFound:
 *                   $ref: '#/components/schemas/RuleWithPermissions'
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
RuleRoutes.get("/rule/:id",authorize([],['read']),GetRule)
/**
 * @swagger
 * /rules/{id}:
 *   put:
 *     summary: Update a rule
 *     tags: [Rules]
 *     description: Update a rule with specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the rule to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RuleUpdate'
 *     responses:
 *       '200':
 *         description: Rule updated successfully
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
 *         description: Rule not found by provided ID
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
RuleRoutes.put("/rule/:id",authorize(['admin'],['update']),UpdateRule)
/**
 * @swagger
 * /rules/{id}:
 *   delete:
 *     summary: Delete a rule
 *     tags: [Rules]
 *     description: Delete a rule with specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the rule to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Rule deleted successfully
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
 *         description: Rule not found by provided ID
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
RuleRoutes.delete("/rule/:id",authorize(['admin'],['delete']),DeleteRule)


export default RuleRoutes
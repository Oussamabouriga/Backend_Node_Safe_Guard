import express from 'express';
import { addAlert, getAllAlerts, getAlertById, getAlertsByUser, updateAlertById, deleteAllAlerts, deleteAlertById, getAlertsByPage } from '../controllers/alertController.js';
import { body } from "express-validator";

const router = express.Router(); 

router
.route('/page')
.get(getAlertsByPage)

router
  .route('/')
  .get(getAllAlerts)
  .delete(deleteAllAlerts)
  .post(
    body('type').isLength({ min: 5 }),
    body('description').isLength({ min: 5 }),
    body('idUser').isMongoId(),
    body('idCatastrophe').isMongoId(),
    addAlert
  )



router
.route('/:id')
.get(getAlertById)
.put(updateAlertById)
.delete(deleteAlertById)

router
.route('/idUser/:idUser')
.get(getAlertsByUser)



export default router;


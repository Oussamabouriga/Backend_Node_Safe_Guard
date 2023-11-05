import express from 'express';
import {
    addCatastrophe,
    getAllCatastrophes,
    getCatastropheById,
    updateCatastropheById,
    deleteCatastropheById,
    deleteAllCatastrophes
} from '../controllers/catastropheController.js';
import { body } from 'express-validator';

const router = express.Router();

router
    .route('/')
    .get(getAllCatastrophes)
    .delete(deleteAllCatastrophes)
    .post(
        body('titre').isLength({ min: 5 }),
        body('description').isLength({ min: 5 }),
        body('date').isISO8601().toDate(),
        body('radius').isNumeric(),
        body('magnitude').isNumeric(),
        body('latitudeDeCatastrophe').isNumeric(),
        body('longitudeDeCatastrophe').isNumeric(),
        addCatastrophe
    );

router
    .route('/:id')
    .get(getCatastropheById)
    .put(updateCatastropheById)
    .delete(deleteCatastropheById);

export default router;

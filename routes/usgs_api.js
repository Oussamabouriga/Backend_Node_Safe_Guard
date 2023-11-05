import express from 'express'
import { saveEarthquakeDataToDatabase } from '../controllers/usgs_api.js';

const router = express.Router();

router.get('/fetch_save', saveEarthquakeDataToDatabase);

export default router;

import axios from "axios";
import Catastrophe from '../models/catastrophe.js';
import mongoose from "mongoose";

const fetchEarthquakeData = async () => {
    try {
      const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch earthquake data');
    }
  };
  
  const saveEarthquakeDataToDatabase = async () => {
    try {
      const earthquakeData = await fetchEarthquakeData();
  
      for (const feature of earthquakeData.features) {
        const {
          properties: { title, type, tsunami, place, mag, time },
          geometry: { coordinates },
        } = feature;
  
        const [longitude, latitude] = coordinates;
  
        const catastropheData = {
          titre: title,
          type: type,
          tsunami:tsunami,
          description: place,
          date: time,
          radius: Math.pow(10, 0.5 * mag), 
          magnitude: mag,
          latitudeDeCatastrophe: latitude,
          longitudeDeCatastrophe: longitude,
        };
  
        const catastrophe = new Catastrophe(catastropheData);
        await catastrophe.save();
      }
    } catch (error) {
      console.error('Failed to fetch and save earthquake data:', error);
    }
  };
  
  export { saveEarthquakeDataToDatabase };
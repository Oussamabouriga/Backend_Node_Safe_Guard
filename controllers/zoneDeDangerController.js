import e from "express";
import zoneDeDanger from "../models/zoneDeDanger";  

export function createZoneDeDanger(req, res) {
    const { latitude, longitude, idCatastrophe } = req.body;
    const newZoneDeDanger = new zoneDeDanger({ latitude, longitude, idCatastrophe });
    newZoneDeDanger.save()
        .then(savedZoneDeDanger => res.json(savedZoneDeDanger))
        .catch(err => res.status(400).json(err));
}

export function getZoneDeDangers(req, res) {
    zoneDeDanger.find()
        .then(
            zoneDeDangers => res.json(zoneDeDangers)
            )
        .catch(err => res.status(400).json(err));
}

export function updateZoneDeDanger(req, res) {
  zoneDeDanger.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedZoneDeDanger) => {
            res.status(200).json(updatedZoneDeDanger);
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
}

export function deleteZoneDeDanger(req, res) {
    zoneDeDanger.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).send();
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
}

export function getZoneDeDangerById(req, res) {
    zoneDeDanger.findById(req.params.id)
        .then((zoneDeDanger) => {
            res.status(200).json(zoneDeDanger);
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
}





import TarjetSecurise from '../models/tarjetSecurise.js';

export function createTarjetSecurise(req, res) {
    const { etat, iduser, idCatastrophe } = req.body;
    const newTarjetSecurise = new TarjetSecurise({ etat, iduser, idCatastrophe });
    newTarjetSecurise.save()
        .then(savedTarjetSecurise => res.json(savedTarjetSecurise))
        .catch(err => res.status(400).json(err));
}


export function getTarjetSecurises(req, res) {
    TarjetSecurise.find()
        .then(
            tarjetSecurises => res.status(200).json(tarjetSecurises)
            )
        .catch(err => res.status(400).json(err));
}


export function updateTrajetSecurise(req, res) {
    const trajetId = req.params.id;
    TarjetSecurise.findByIdAndUpdate(trajetId, req.body)
        .then((updatedTrajet) => {
            res.status(200).json(updatedTrajet);
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
};

    

export function deleteTrajetSecurise(req, res) {
    const trajetId = req.params.id;
    TarjetSecurise.findByIdAndDelete(trajetId)
        .then(() => {
            res.status(200).send();
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
}
export function getCatastropheRadius(req, res) {
    const catastropheId = req.params.id;
    Catastrophe.findById(catastropheId)
        .then((catastrophe) => {
            res.status(200).json({ radius: catastrophe.radius });
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
}

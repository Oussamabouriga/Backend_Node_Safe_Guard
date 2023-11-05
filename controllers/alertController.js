import alert from '../models/alerts.js';
import mongoose from 'mongoose';

//create alert

function addAlert(req, res) {
    const { notifiedPerson, description, idUser, idCatastrophe } = req.body;
    const userId = new mongoose.Types.ObjectId(idUser);
    const catastropheId = new mongoose.Types.ObjectId(idCatastrophe);
    alert.create({
        notifiedPerson,
        description,
        idUser: userId,
        idCatastrophe: catastropheId
    })
    .then(newAlert => {
        res.status(200).json(newAlert);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

// get all alerts
function getAllAlerts(req, res) {
    alert.find()
        .then(alerts => {
            res.status(200).json(alerts);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

// get alerte par id
function getAlertById(req, res) {
    alert.findById(req.params.id)
        .then(alert => {
            res.status(200).json(alert);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

//get alert by user 
function getAlertsByUser(req, res) {  
    alert.find({ idUser: req.params.idUser })
      .then(alerts => {
        res.status(200).json(alerts);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }

// update by ID
function updateAlertById(req, res) {
    const alertId = req.params.id; 
    const updatedAlertData = req.body; 
      alert.findByIdAndUpdate(req.params.id, req.body)
      .then(updatedAlert => {
        if (!updatedAlert) {
          return res.status(404).json({ message: "Alerte non trouvée" });
        }
        res.status(200).json(updatedAlert);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }

// delete all alerts
function deleteAllAlerts(req, res) {
    alert.deleteMany({}) 
        .then(alert => {
            res.status(200).json(alert);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

// delete by id
function deleteAlertById(req,res) {
    alert.findByIdAndDelete(req.params.id)
    .then( deletedAlert => {
        if (!deletedAlert) {
            return res.status(404).json({ message: "Alerte non trouvée" });
          }
        res.status(204).send();
    }
    )
    .catch((err) => {
        res.status(500).json({error:err})
    }

    )
}

// Pagination des alertes
function getAlertsByPage(req, res) {
    const page = req.query.page || 1; 
    const perPage = 3; 
    const startIndex = (page - 1) * perPage; // besh mba3d nesta3mlha fel skip
      alert.find({})
      .skip(startIndex) // l'index de la premiere alerte
      .limit(perPage) 
      .then(alerts => {
        res.status(200).json(alerts);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }
  

  export {
    addAlert,
    getAllAlerts,
    getAlertById,
    getAlertsByUser,
    updateAlertById,
    deleteAlertById,
    deleteAllAlerts,
    getAlertsByPage
};

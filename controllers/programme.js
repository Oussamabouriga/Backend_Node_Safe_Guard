import Programme from "../models/programme.js";
export function AjouterProgramme(req, res) {
  Programme.create({
    Titre: req.body.Titre,
    descriptionProgramme: req.body.descriptionProgramme,
    image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
  })
    .then((newProg) => {
      res.status(200).json(newProg);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getAllProg(req, res) {
  Programme.find({})
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getOnceProg(req, res) {
  Programme.findOne({ Titre: req.params.Titre })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function UpdateProg(req, res) {
  Programme.findOneAndUpdate({ Titre: req.params.Titre })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}


export function deleteAll(req, res) {
  Programme.deleteMany({})
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function deleteOnceProg(req, res) {
  Programme.findOneAndDelete({ Titre: req.params.Titre })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

import {
  createTopic,
  getAllTopics,
  updateTopicById,
  deleteTopicById,
} from "../services/topics.service.js";

const createTopicController = async (req, res) => {
  try {
    const { title, userId, categorieId } = req.body;

    if (!title || !userId || !categorieId) {
      return res.status(400).json({ message: "Données manquantes" });
    }

    const newTopic = await createTopic({
      title: title.toLowerCase(),
      userId,
      categorieId,
    });

    res.status(201).json(newTopic);
  } catch (err) {
    if (err.message.includes("Titre déjà utilisé")) {
      return res.status(409).json({ message: err.message });
    }

    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

const getAllTopicsController = async (req, res) => {
  try {
    const topics = await getAllTopics();
    res.status(200).json(topics);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

const updateTopicByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    if (!id || !update) {
      return res.status(400).json({ message: "Données invalides" });
    }

    const updated = await updateTopicById(id, update);
    if (!updated) {
      return res.status(404).json({ message: "Topic non trouvé" });
    }

    res.status(200).json(updated);
  } catch (err) {
    if (err.message.includes("Titre déjà utilisé")) {
      return res.status(409).json({ message: err.message });
    }

    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

const deleteTopicByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID requis" });
    }

    const deleted = await deleteTopicById(id);
    if (!deleted) {
      return res.status(404).json({ message: "Topic non trouvé" });
    }

    res.status(200).json({ message: "Topic supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

export {
  createTopicController,
  getAllTopicsController,
  updateTopicByIdController,
  deleteTopicByIdController,
};

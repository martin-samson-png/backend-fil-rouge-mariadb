import {
  createTopic,
  getAllTopics,
  updateTopicById,
  deleteTopicById,
} from "./topics.service.js";

const createTopicController = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Missing data" });
    }
    const newTopic = await createTopic({
      title: title.toLowerCase(),
    });
    res.status(201).json(newTopic);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Existing topic" });
    }
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const getAllTopicsController = async (req, res) => {
  try {
    const allTopics = await getAllTopics();
    res.json(allTopics);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const updateTopicByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    if (!id) {
      return res.status(400).json({ message: "Id is not valid" });
    }
    if (!update) {
      return res.status(400).json({ message: "Missing data" });
    }
    await updateTopicById(id, update);
    res.json({ message: "Categorie updated" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const deleteTopicByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Id is not valid" });
    }
    await deleteTopicById(id);
    res.json({ message: "Topic deleted" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

export {
  createTopicController,
  getAllTopicsController,
  updateTopicByIdController,
  deleteTopicByIdController,
};

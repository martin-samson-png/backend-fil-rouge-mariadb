import Topic from "./topics.model.js";

const getAllTopics = async () => {
  return await Topic.find();
};

const getTopicById = async (id) => {
  return await Topic.findById(id);
};

const createTopic = async ({ title, userId, categorieId }) => {
  const existing = await Topic.findOne({ title });
  if (existing) throw new Error("Titre déjà utilisé");

  const newTopic = new Topic({
    title: title.toLowerCase(),
    userId,
    categorieId,
  });

  return await newTopic.save();
};

const updateTopicById = async (id, update) => {
  const { title } = update;

  if (title) {
    const existing = await Topic.findOne({ title });
    const isSame = existing && existing._id.toString() === id;
    if (existing && !isSame) throw new Error("Titre déjà utilisé");
    update.title = title.toLowerCase();
  }

  return await Topic.findByIdAndUpdate(id, update, { new: true });
};

const deleteTopicById = async (id) => {
  return await Topic.findByIdAndDelete(id);
};

export {
  getAllTopics,
  getTopicById,
  createTopic,
  updateTopicById,
  deleteTopicById,
};

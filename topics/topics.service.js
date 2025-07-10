import Topic from "./topics.model.js";

const createTopic = async (data) => {
  return await Topic.create(data);
};

const getAllTopics = async () => {
  return await Topic.find();
};

const updateTopicById = async (topic_id, update) => {
  return await Topic.updateOne(
    { _id: topic_id },
    { $set: update },
    { new: true }
  );
};

const deleteTopicById = async (topic_id) => {
  const topic = await Topic.findById(topic_id);
  if (!topic) {
    return null;
  }
  return await topic.deleteOne();
};

export { createTopic, getAllTopics, updateTopicById, deleteTopicById };

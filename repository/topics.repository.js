import Topic from "../models/topics.model.js";

class TopicRepository {
  async createTopic({ title, idCategory, idUser }) {
    try {
      const newTopic = new Topic({ title, idCategory, idUser });
    } catch (err) {
      throw new Error("Error creating topic", err);
    }
  }
}

import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });
  }

  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }
  update(id, video) {
    const existingVideo = this.#videos.get(id); // Recupera o vídeo atual
    if (!existingVideo) {
      throw new Error("Vídeo não encontrado!");
    }

    // Atualiza somente os campos necessários
    const updatedVideo = {
      ...existingVideo,
      ...video,
    };

    this.#videos.set(id, updatedVideo); // Salva o vídeo atualizado
  }

  //---------------------------
  //update(id, video) {
  //this.#videos.set(id, video);
  //}
  //--------------------

  delete(id) {
    this.#videos.delete(id);
  }
}

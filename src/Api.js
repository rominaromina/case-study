class API {
  async getShow(id) {
    const response = await fetch(
      `http://api.tvmaze.com/${id}`
    );
    const data = await response.json();
    return data;
  }

  async getEpisodes(id) {
    const response = await fetch(
      `http://api.tvmaze.com/${id}`
    );
    const data = await response.json();
    return data;
  }

  async getEpisode(id) {
    const response = await fetch(
      `http://api.tvmaze.com/episodes/${id}`
    );
    const data = await response.json();
    return data;
  }
}
const api = new API();
export default api;

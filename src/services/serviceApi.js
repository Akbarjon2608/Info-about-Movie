import { Component } from "react";
import { Axios } from "./axios";
import { endPoints } from "./endpoint";

class Movie extends Component {
  async getPopular() {
    try {
      const response = await Axios.get(endPoints.popular);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getTopRated() {
    try {
      const response = await Axios.get(endPoints.top_rated);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getGanres() {
    try {
      const response = await Axios.get(endPoints.ganerList);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getUpcoming() {
    try {
      const response = await Axios.get(endPoints.upcoming);
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getSingle(id) {
    try {
      const response = await Axios.get(endPoints.getSingle(id));
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getSearchResult(query) {
    try {
      const response = await Axios.get(endPoints.searchMovie(query));
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getGeneralSearch(...query) {
    try {
      const response = await Axios.get(endPoints.generalSearch(query));
      return { response };
    } catch (error) {
      return { error };
    }
  }
}
export { Movie };

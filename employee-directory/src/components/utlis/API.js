import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getEmployeeByName: function(name) {
    return axios.get("https://randomuser.me/api/?results=200&nat=us" + name);
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

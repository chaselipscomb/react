import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getEmployeeByGender: function(gender) {
    return axios.get("https://randomuser.me/api/?results=200&gender=" + gender);
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

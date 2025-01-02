import { destinationsData } from '../utils/destinationData';

export const DestinationService = {
  getAll() {
    return destinationsData;
  },

  getById(id) {
    return destinationsData.find(dest => dest.id === parseInt(id));
  },

  getByCategory(category) {
    return destinationsData.filter(dest => dest.category === category);
  },

  search(query) {
    return destinationsData.filter(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};

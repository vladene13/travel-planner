export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePlannerForm = (formData) => {
    const errors = {};
  
    if (!formData.destination) {
      errors.destination = 'Destinația este obligatorie';
    }
  
    if (!formData.startDate || !formData.endDate) {
      errors.dates = 'Ambele date sunt obligatorii';
    } else {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const today = new Date();
  
      if (start < today) {
        errors.dates = 'Data de plecare nu poate fi în trecut';
      }
      if (end <= start) {
        errors.dates = 'Data de întoarcere trebuie să fie după data de plecare';
      }
    }
  
    if (formData.travelers < 1) {
      errors.travelers = 'Minim un călător este necesar';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
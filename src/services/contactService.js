export const ContactService = {
    async sendMessage(messageData) {
      try {
        // Simulare API call
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              message: 'Mesajul a fost trimis cu succes!'
            });
          }, 1000);
        });
      } catch (error) {
        console.error('Contact service error:', error);
        throw error;
      }
    }
  };
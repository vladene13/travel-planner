export const BookingService = {
    async createBooking(bookingData) {
      try {
        // Simulare API call
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              booking: {
                id: Math.random().toString(36).substr(2, 9),
                ...bookingData,
                status: 'confirmed',
                createdAt: new Date().toISOString()
              }
            });
          }, 1000);
        });
      } catch (error) {
        console.error('Booking service error:', error);
        throw error;
      }
    },
  
    async getBookings() {
      try {
        // Simulare API call
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: '1',
                destination: 'Paris',
                startDate: '2025-06-01',
                endDate: '2025-06-07',
                status: 'confirmed'
              },
              // Adaugă mai multe rezervări
            ]);
          }, 1000);
        });
      } catch (error) {
        console.error('Get bookings error:', error);
        throw error;
      }
    }
  };
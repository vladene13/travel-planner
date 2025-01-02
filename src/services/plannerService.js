export const PlannerService = {
    async savePlan(planData) {
      try {
        // Simulare API call
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              data: {
                id: Math.random().toString(36).substr(2, 9),
                ...planData,
                createdAt: new Date().toISOString()
              }
            });
          }, 1000);
        });
      } catch (error) {
        console.error('Planner service error:', error);
        throw error;
      }
    },
  
    async getItinerary(planData) {
      try {
        // Simulare generare itinerariu
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              days: [
                {
                  day: 1,
                  activities: [
                    { time: '09:00', activity: 'Check-in hotel' },
                    { time: '11:00', activity: 'Tur ghidat' },
                    { time: '13:00', activity: 'Prânz' }
                  ]
                },
                // Adaugă mai multe zile aici
              ]
            });
          }, 1500);
        });
      } catch (error) {
        console.error('Itinerary service error:', error);
        throw error;
      }
    }
  };
  
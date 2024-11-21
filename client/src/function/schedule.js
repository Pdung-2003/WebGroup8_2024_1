const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const fetchAllSchedules = async () => {
    try {
      const response = await fetch(`${BASE_URL}/schedule`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.ok) {
        return { success: true, schedules: result };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: "Something went wrong!" };
    }
  };

export const fetchScheduleById = async (scheduleId) => {
    try {
        const response = await fetch(`${BASE_URL}/schedule/${scheduleId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        if (response.ok) {
            return { success: true, schedule: result };
        } else {
            return { success: false, error: result.error };
        }
    } catch (error) {
        return { success: false, error: "Something went wrong!" };
    }
};

export const createSchedule = async (scheduleData) => {
    try {
        const response = await fetch(`${BASE_URL}/schedule`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(scheduleData),
        });
        const result = await response.json();
        if (response.ok) {
            return { success: true, schedule: result };
        } else {
            return { success: false, error: result.error };
        }
    } catch (error) {
        return { success: false, error: "Something went wrong!" };
    }
};

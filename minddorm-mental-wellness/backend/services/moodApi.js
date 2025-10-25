// services/moodApi.js
export const saveMoodEntry = async (moodData) => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch('http://localhost:5050/api/mood/entry', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mood_rating: moodData.mood_rating,
        notes: moodData.notes,
        check_in_date: new Date().toISOString().split('T')[0]
      })
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error saving mood:', error);
    throw error;
  }
};

export const getMoodStats = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch('http://localhost:5050/api/mood/stats', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching mood stats:', error);
    throw error;
  }
};
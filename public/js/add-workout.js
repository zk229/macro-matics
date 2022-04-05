const workoutFormHandler = async (event) => {
    event.preventDefault();
  
    const date = document.querySelector("#workout-date").value.trim();
    const calories = document.querySelector("#workout-calories").value.trim();
  
    if (date && calories) {
      const response = await fetch('/api/workout', {
        method: 'POST',
        body: JSON.stringify({ date, calories }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('There was a problem - please try again');
      }
    }
};

 document.querySelector(".workout-form").addEventListener("submit", workoutFormHandler);
const mealFormHandler = async (event) => {
    event.preventDefault();
    console.log("test 1");
  
    const name = document.querySelector("#meal-name").value.trim();
    const date = document.querySelector("#meal-date").value.trim();
    const calories = document.querySelector("#meal-calories").value.trim();
    const protein = document.querySelector("#meal-protein").value.trim();
    const carbs = document.querySelector("#meal-carbs").value.trim();
    const fat = document.querySelector("#meal-fat").value.trim();
  
    if (name && date && calories && protein && carbs && fat) {
      const response = await fetch('/api/meal', {
        method: 'POST',
        body: JSON.stringify({ name, date, calories, protein, carbs, fat }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
};

 document.querySelector(".meal-form").addEventListener("submit", mealFormHandler);
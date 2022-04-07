const statsFormHandler = (event) => {
    event.preventDefault();

    const date = document.querySelector("#stats-date").value.trim();
    console.log(date);

    window.location.assign("/view-stats/" + date);
}

document.querySelector(".stats-form").addEventListener("submit", statsFormHandler);
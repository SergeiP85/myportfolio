const form = document.querySelector("[data-search-form]");
const input = document.querySelector("[data-search-input]");
const userInfoContainer = document.querySelector("[data-user-info-container]");
const reposContainer = document.querySelector("[data-repos-container]");

const API_GITHUB = "https://api.github.com/users";

form.addEventListener("submit", async (e) => {  
    e.preventDefault();

    const username = input.value.trim();
    if (!username) {
        alert("Please enter a GitHub username.");
        return;
    }

    try {
        const userResponse = await fetch(`${API_GITHUB}/${username}`);
        if (!userResponse.ok) throw new Error("User not found");
        const userData = await userResponse.json();

        userInfoContainer.innerHTML = `
            <div>
                <img src="${userData.avatar_url}" alt="${userData.login}'s avatar" />
                <h3>${userData.name || userData.login}</h3>
                <p>${userData.bio || "No Bio Available"}</p>
            </div>
        `;

       
    } catch (error) {
        userInfoContainer.innerHTML = `<p>${error.message}</p>`;
    }
});

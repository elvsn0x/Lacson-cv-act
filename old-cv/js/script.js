console.log("submitBtn");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
    }
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Toggle Light Mode";
    } else {
        themeToggle.textContent = "Toggle Dark Mode";
    }
});

const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skills");

toggleSkills.addEventListener("click", function(){
    skillsSection.classList.toggle("hidden");
});
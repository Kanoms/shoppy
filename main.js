const container = document.getElementById("container");

for (let i = 0; i < 5; i++) {
  const circle = document.createElement("div");
  circle.textContent = "";
  container.appendChild(circle);

  if (i === 2) {
    circle.classList.add("toggled");
  }

  circle.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove the "toggled" class from all divs within the container
    const divs = container.getElementsByTagName("div");
    for (let j = 0; j < divs.length; j++) {
      divs[j].classList.remove("toggled");
    }

    // Add the "toggled" class to the clicked div
    circle.classList.add("toggled");
  });
}

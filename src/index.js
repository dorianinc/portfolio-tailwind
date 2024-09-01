import initializePortfolio from "./js/portfolio.js";
import createCalculator from "./js/calculator.js";

document.addEventListener("DOMContentLoaded", () => {
  const pathName = window.location.pathname;
  console.log("🖥️  pathName: ", pathName);

  if (pathName === "/apps") {
    initializeAppCounter();
  } else {
    initializePortfolio();
  }
});

const initializeAppCounter = () => {
  createCalculator();
};

const themeBtn = document.querySelector(".them-toggle");
const notificationsBtn = document.querySelector(".notifications");
const dashboard = document.querySelector(".dashboard-container");
const sidebar = document.querySelector(".sidebar");
const logoText = document.querySelector(".logo-text");
const welcomeTitle = document.querySelector(".welcome-title");

const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title");
const addCard = document.querySelector(".add-card");

const balanceCard = document.querySelector(".balance-card");
const cardTitleBalance = document.querySelector("#card-title-balance");
const balanceDate = document.querySelector(".balance-date");
const quickAction = document.querySelectorAll(".quick-action");

const transactionCard = document.querySelector(".transaction-card");

const expensesCard = document.querySelector(".expenses-card");
const expensesTotal = document.querySelector(".expenses-total");

themeBtn.addEventListener("click", (e) => {
  const target = e.target.closest(".them-toggle");
  if (!target) return;

  let color = target.dataset.color;
  if (color === "light" || color === "dark-mode") {
    const isDarkMode = dashboard.classList.toggle("dark-mode");

    sidebar.classList.toggle("gray-mode", isDarkMode);
    logoText.classList.toggle("text-dark-mode", isDarkMode);
    themeBtn.classList.toggle("gray-mode");
    card.classList.toggle("gray-mode");
    balanceCard.classList.toggle("gray-mode");
    notificationsBtn.classList.toggle("gray-mode");
    transactionCard.classList.toggle("gray-mode");
    expensesCard.classList.toggle("gray-mode");

    if (isDarkMode) {
      welcomeTitle.style.color = "var(--text-secondary)";
      themeBtn.style.color = "var(--primary-color)";
      notificationsBtn.style.color = "var(--primary-color)";
      cardTitle.style.color = "#4a5569";
      addCard.style.background = "#151a24";
      cardTitleBalance.style.color = "#4a5569";
      balanceDate.style.background = "#151a24";
      quickAction.forEach((action) => {
        action.style.background = "#151a24";
      });
      expensesTotal.style.background = "#151a24";
    } else {
      welcomeTitle.style.color = "var(--text-primary)";
      cardTitle.style.color = "var(--text-primary)";
      addCard.style.background = "var(--bg-secondary)";
      cardTitleBalance.style.color = "var(--text-primary)";
      balanceDate.style.background = "var(--bg-secondary)";
      quickAction.forEach((action) => {
        action.style.background = "var(--bg-secondary)";
      });
    }
  }
});

/* Replace YOUR_BOT_USERNAME with your Telegram bot username (without @). */
const BOT_USERNAME = "YOUR_BOT_USERNAME";
const BOT_URL = `https://t.me/${BOT_USERNAME}`;
document.querySelectorAll(".telegram-link").forEach((link) => {
  link.href = BOT_USERNAME === "YOUR_BOT_USERNAME" ? "#telegram-booking" : BOT_URL;
});
const form = document.getElementById("telegramLeadForm");
const note = document.getElementById("telegramFormNote");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("playerName").value.trim();
    const age = document.getElementById("playerAge").value.trim();
    const type = document.getElementById("trainingType").value;
    const phone = document.getElementById("playerPhone").value.trim();
    const location = document.getElementById("playerLocation").value.trim();
    const message = [
      "Привет! Хочу записаться на футбольную тренировку FIELDUP.",
      `Имя игрока: ${name}`, `Возраст: ${age}`, `Формат: ${type}`,
      `Телефон: ${phone}`, `Район / стадион: ${location || "Пока не выбрано"}`
    ].join("\\n");
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(BOT_URL)}&text=${encodeURIComponent(message)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
    if (note) note.textContent = "Telegram открыт с подготовленной заявкой. Выбери чат и отправь сообщение самостоятельно. Для автоматического приёма заявок нужно настроить бота.";
  });
}
document.documentElement.classList.add("js-reveal");
const targets = document.querySelectorAll(".reveal-section, .reveal-item");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced || !("IntersectionObserver" in window)) {
  targets.forEach(el => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12, rootMargin: "0px 0px -35px 0px"});
  targets.forEach(el => observer.observe(el));
}

// Gestión de pestañas
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      tabContents.forEach((sec) => {
        if (sec.id === targetId) sec.classList.add("active");
        else sec.classList.remove("active");
      });
      if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
    });
  });

  // Resaltado progresivo demostración teorema equivalencia (acumula visibilidad)
  const btnEquiv = document.getElementById("btn-equivalencia");
  const stepsContainer = document.getElementById("equivalencia-steps");
  const steps = stepsContainer ? stepsContainer.querySelectorAll(".step") : [];
  let currentStep = -1;

  function showNextStep() {
    if (!steps.length) return;
    if (currentStep < steps.length - 1) {
      currentStep++;
      steps[currentStep].classList.add("visible");
      btnEquiv.textContent =
        currentStep < steps.length - 1 ? "Resaltar siguiente paso" : "Reiniciar demostración";
      if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
    } else {
      // Reiniciar todo
      steps.forEach((st) => st.classList.remove("visible"));
      currentStep = -1;
      btnEquiv.textContent = "Resaltar siguiente paso";
    }
  }

  if (btnEquiv) btnEquiv.addEventListener("click", showNextStep);
});

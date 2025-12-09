// update-date.js
document.addEventListener("DOMContentLoaded", () => {
    const lastUpdateElements = document.querySelectorAll('.last-update');
    
    // Define a data de atualização aqui:
    const dataAtualizacao = "09 de dezembro de 2025";

    lastUpdateElements.forEach(el => {
        el.textContent = `Última atualização em: ${dataAtualizacao}`;
    });
});

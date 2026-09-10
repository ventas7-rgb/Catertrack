// ==============================
// Visor de PDF en ventana modal
// ==============================

let pdfActual = "";

function abrirPDF(pdf) {
    const modal = document.getElementById("pdfModal");
    const visor = document.getElementById("visorPDF");

    pdfActual = pdf;
    visor.src = pdf;
    modal.style.display = "flex";
}

function cerrarPDF() {
    const modal = document.getElementById("pdfModal");
    const visor = document.getElementById("visorPDF");

    visor.src = "";
    pdfActual = "";
    modal.style.display = "none";
}

function descargarPDF() {
    if (!pdfActual) return;
    const link = document.createElement("a");
    link.href = pdfActual;
    link.download = pdfActual.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Espera a que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("pdfModal");

    if (!modal) return;

    // Cerrar al hacer clic fuera del PDF
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            cerrarPDF();
        }
    });

    // Cerrar con la tecla ESC
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            cerrarPDF();
        }
    });

});
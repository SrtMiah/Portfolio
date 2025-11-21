// --- EFEITO FADE ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
      entry.target.classList.remove('show'); // remove quando sai da tela
        }
    });
});

function abrirProjetos(url) {
    window.open(url, "_blank")
}

document.querySelectorAll('.fade').forEach((el) => observer.observe(el));


// --- EFEITO TYPEWRITER NO NOME ---
document.addEventListener("DOMContentLoaded", function() {
    const texto = "Miriam Lopes"; // coloque o nome aqui
    const speed = 120;            // velocidade da digitação
    let index = 0;

    function typeWriter() {
        if (index < texto.length) {
            document.getElementById("typewriter").textContent += texto.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

// --- fundo animado ---

tsParticles.load("tsparticles",{
    background: {
        color: "transparent"
        },
        particles: {
            number: {
                value: 90,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: { value: "#ffffff"
            },
            shape: { type: "circle"
            },
            opacity: { value: 0.4
            },
            size: { value: { min: 1, max: 4}
            },
            move: {
                enable: true,
                speed: 0.3,
                outModes: { default: "out"}
            },

/*essa parte cria as linhas entre as particulas*/
            links: {
                enable: true,
                distance: 140, //distancia maxima entre as particulas
                color: "#ffffff",
                opacity: 0.45,
                width: 1
            }
        },

        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" }, ///grab para puxar as particulas
                onClick: { enable: true, mode: "push" } //push para adicionar mais particulas
            },

            modes: {
                repulse: {
                    distance: 80,
                    duration: 0.9,
                    factor:50
                },
                push: {
                    quantity: 4
                }
            }
        }
});

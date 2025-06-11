const categories = [
    { 
        "name": "IOS", 
        "questions": [
            { 
                "text": "¿Cuáles son los tipos de aplicaciones móviles que existen?", 
                "image": "iOS.jpg", 
                "answers": ["Nativas", "Web", "Híbridas","Todas las anteriores"], 
                "correct": 3, 
                "points": 3 
            },
            { 
                "text": "¿En qué está basada la arquitectura de iOS?", 
                "image": "iOS.jpg", 
                "answers": ["En capas", "En módulos", "En componentes", "En redes"], 
                "correct": 0, 
                "points": 3 
            },
            { 
                "text": "¿Quién fue el principal impulsor del iPhone?", 
                "image": "iOS.jpg", 
                "answers": ["Steve Jobs", "Bill Gates", "Scott Forstall", "Mark Zuckerberg"], 
                "correct": 0, 
                "points": 3 
            },
            { 
                "text": "¿Cuales son las capas de IOS?", 
                "image": "iOS.jpg", 
                "answers": ["Todas las siguientes","Cocoa Touch", "Core Services", "Media", "Core OS"], 
                "correct": 0, 
                "points": 3 
            },
            { 
                "text": " Controla el hardware y seguridad ¿Es la funcion de?", 
                "image": "iOS.jpg", 
                "answers": ["Cocoa Touch", "Core Services", "Media", "Core OS"], 
                "correct": 3, 
                "points": 3 
            },
            { 
                "text": "Proporciona servicios básicos del sistema (como bases de datos, redes).¿es la funcion de?", 
                "image": "iOS.jpg", 
                "answers": ["Cocoa Touch", "Core Services", "Media", "Core OS"], 
                "correct": 1, 
                "points": 3 
            },
            { 
                "text": "¿Es la capa encargada de la Interfaz de usuario y eventos táctiles?", 
                "image": "iOS.jpg", 
                "answers": ["Cocoa Touch", "Core Services", "Media", "Core OS"], 
                "correct": 0, 
                "points": 3 
            },
            { 
                "text": "¿La capa que nos permite el manejo de gráficos, audio y video?", 
                "image": "iOS.jpg", 
                "answers": ["Cocoa Touch", "Core Services", "Media", "Core OS"], 
                "correct": 2, 
                "points": 3 
            },
            { 
                "text": "¿A partir de que año SWIFT fue utilizado para crear apps IOS?", 
                "image": "iOS.jpg", 
                "answers": ["2008", "2005", "2020", "2014"], 
                "correct": 3, 
                "points": 3 
            }
        ] 
    },
    { 
        "name": "Android", 
        "questions": [
            { 
                "text": "Menciona otros 4 sistemas operativos móviles aparte de Android", 
                "image": "android.gif", 
                "answers": ["iOS, HarmonyOS, KaiOS, Windows Phone", "Linux, Unix, Windows, ChromeOS", "Symbian, WebOS, Sailfish, Tizen", "Windows 10, MacOS, FreeBSD, BeOS"], 
                "correct": 0, 
                "points": 3 
            },
            { 
                "text": "¿Qué es el kernel?", 
                "image": "android.gif", 
                "answers": ["Núcleo del sistema operativo", "Sistema de archivos", "Interfaz gráfica", "Un controlador de red"], 
                "correct": 0, 
                "points": 3 
            },
            { 
                "text": "¿Quiénes fueron los fundadores de Android?", 
                "image": "android.gif", 
                "answers": ["Andy Rubin, Rich Miner, Nick Sears, Chris White", "Steve Jobs, Scott Forstall, Tim Cook", "Larry Page, Sergey Brin, Sundar Pichai", "Mark Zuckerberg, Eduardo Saverin, Sean Parker"], 
                "correct": 0, 
                "points": 3 
            },
            { 
                "text": "¿Cuáles son las funciones de las actualizaciones o parches para el S.O.?", 
                "image": "android.gif", 
                "answers": ["Corregir errores", "mejorar seguridad", "mejorar rendimiento","Todas las anteriores"], 
                "correct": 3, 
                "points": 3 
            },
            { 
                "text": "¿A partir de qué año se dejo de utilizar el nombre de postres para nombrar las versiones de Android?", 
                "image": "android.gif", 
                "answers": ["2014", "2019", "2020", "2009"], 
                "correct": 1, 
                "points": 3 
            },
            { 
                "text": "¿S.O. en que se basó Android?", 
                "image": "android.gif", 
                "answers": ["Unix", "Windows", "Linux", "IOS"], 
                "correct": 2, 
                "points": 3 
            },
            { 
                "text": "¿Qué es un AVD?", 
                "image": "android.gif", 
                "answers": ["Control","Procedimiento", "Algoritmo", "Emulador", "Core"], 
                "correct": 3, 
                "points": 3 
            },
            { 
                "text": "¿Para qué sirve el atributo hint?", 
                "image": "android.gif", 
                "answers": ["Quitar texto guía en campos de entrada", "Mostrar texto guía en campos de entrada", "Escribir texto  guía en campos de entrada", "Controlar texto  guía en campos de entrada"], 
                "correct": 1, 
                "points": 3 
            },
            { 
                "text": "¿Para qué sirve la función setText()??", 
                "image": "android.gif", 
                "answers": ["Enviar texto en un TextView o EditText", "Mostrar texto en un TextView o EditText", "Las dos anteriores"], 
                "correct": 2, 
                "points": 3 
            }
        ] 
    }
];


categories.forEach(category => {
    category.originalQuestions = category.questions.map(q => ({ ...q })); // Guardar copia inicial
});


let scores = [0, 0];
let currentPlayer = 0;

function displayCategories() {
    const categoryDiv = document.getElementById("categories");
    categoryDiv.innerHTML = "";

    categories.forEach((category, catIndex) => {
        if (category.questions.length === 0) return; // Ocultar categorías vacías

        const div = document.createElement("div");
        div.classList.add("category");
        div.dataset.index = catIndex;
        div.innerHTML = `<h3>${category.name}</h3>`;
        
        category.questions.forEach((q, qIndex) => {
            const button = document.createElement("button");
            button.textContent = `${q.points} pts`;
            button.dataset.catIndex = catIndex;
            button.dataset.qIndex = qIndex;
            button.onclick = () => showQuestion(catIndex, qIndex);
            div.appendChild(button);
        });

        categoryDiv.appendChild(div);
    });
}

function showQuestion(catIndex, qIndex) {
    const questionBox = document.getElementById("questionBox");
    questionBox.classList.remove("d-none"); // Mostrar el contenedor con Bootstrap

    const questionData = categories[catIndex].questions[qIndex];
    document.getElementById("question").textContent = questionData.text;

    const imgElement = document.getElementById("questionImage");
    if (questionData.image) {
        imgElement.src = questionData.image;
        imgElement.classList.remove("d-none"); // Mostrar la imagen si hay una
    } else {
        imgElement.classList.add("d-none"); // Ocultar si no hay imagen
    }

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.classList.add("btn", "btn-secondary", "w-100");
        btn.onclick = () => checkAnswer(index, questionData, catIndex, qIndex);
        answersDiv.appendChild(btn);
    });
}


function showFeedback(isCorrect) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = isCorrect ? "¡Correcto!" : "¡Incorrecto!";
    feedback.className = isCorrect ? "correct" : "incorrect";
    feedback.style.display = "block";
    setTimeout(() => feedback.style.display = "none", 1500); // Ocultar después de 1.5s
}

/* function checkAnswer(selected, questionData, catIndex, qIndex) {
    const isCorrect = selected === questionData.correct;

    // Reproducir sonido y mostrar animación
    document.getElementById(isCorrect ? "correctSound" : "incorrectSound").play();
    showFeedback(isCorrect);

    if (isCorrect) {
        scores[currentPlayer] += questionData.points;
        updateScore();

        if (scores[currentPlayer] >= 9) {
            showWinAnimation();
            return;
        }
    }

    categories[catIndex].questions.splice(qIndex, 1);
    displayCategories();

    currentPlayer = currentPlayer === 0 ? 1 : 0;
    document.getElementById("currentPlayer").textContent = `Jugador ${currentPlayer + 1}`;
    closeQuestion();
}
 */

let score = 0;

function checkAnswer(selected, questionData, catIndex, qIndex) {
    const isCorrect = selected === questionData.correct;

    document.getElementById(isCorrect ? "correctSound" : "incorrectSound").play();
    showFeedback(isCorrect);

    if (isCorrect) {
        score += questionData.points;
        updateScore();

        if (score >= 9) {
            showWinAnimation();
            return;
        }
    }

    categories[catIndex].questions.splice(qIndex, 1);
    displayCategories();
    closeQuestion();
}

function updateScore() {
    document.getElementById("points1").textContent = score;
}

function showWinAnimation() {
    alert("¡Has ganado con 9 puntos! 🎉");
    setTimeout(resetGame, 1000); // Reiniciar juego tras 2 segundos
}

function resetGame() {
    score = 0;
    document.getElementById("points1").textContent = score;

    // Restaurar preguntas desde la copia original
    categories.forEach(category => {
        category.questions = category.originalQuestions.map(q => ({ ...q }));
    });

    displayCategories();

    // Efecto Bootstrap en el botón de reinicio
    const resetBtn = document.querySelector(".btn-warning");
    resetBtn.classList.add("btn-danger");
    resetBtn.textContent = "Reiniciando...";
    
    setTimeout(() => {
        resetBtn.classList.remove("btn-danger");
        closeQuestion();
        resetBtn.textContent = "Reiniciar Juego";
    }, 500);
}



/* function showWinAnimation() {
    alert(`¡Jugador ${currentPlayer + 1} ha ganado con 1000 puntos! 🎉`);
    disableGame();
}
 */

/* function updateScore() {
    document.getElementById("points1").textContent = scores[0];
    document.getElementById("points2").textContent = scores[1];
}
 */
/* function showWinAnimation() {
    alert(`¡Jugador ${currentPlayer + 1} ha ganado con 9 puntos!`);
    disableGame();
}
 */
function closeQuestion() {
    document.getElementById("questionBox").classList.add("d-none"); // Bootstrap usa "d-none"
}


function disableGame() {
    document.getElementById("categories").innerHTML = "<h2>Juego terminado</h2>";
}

function displayCategories() {
    const categoryDiv = document.getElementById("categories");
    categoryDiv.innerHTML = "";

    categories.forEach((category, catIndex) => {
        if (category.questions.length === 0) return;

        const div = document.createElement("div");
        div.classList.add("col-md-4", "text-center", "mb-3");

        div.innerHTML = `<h3>${category.name}</h3>`;
        
        category.questions.forEach((q, qIndex) => {
            const button = document.createElement("button");
            button.classList.add("btn", "btn-secondary", "w-100");
            button.textContent = `${q.points} pts`;
            button.dataset.catIndex = catIndex;
            button.dataset.qIndex = qIndex;
            button.onclick = () => showQuestion(catIndex, qIndex);
            div.appendChild(button);
        });

        categoryDiv.appendChild(div);
    });
}


window.onload = displayCategories;

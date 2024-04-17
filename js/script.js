function switchToAccessibilityMode() {
  // Fonction permettant de passer du style normal au style accessible et inversement

  console.log(window.localStorage);

  // On déclare 2 variables locales afin de stocker les 2 éléments link à modifier
  let vanilla_style = document.getElementById("stylesheet");
  let accessibility_style = document.getElementById("alternate_stylesheet");

  // Simple inversion de 2 variables
  if (window.localStorage.getItem("style") === "alternate stylesheet") {
    vanilla_style.rel = "stylesheet";
    accessibility_style.rel = "alternate stylesheet";
    window.localStorage.setItem("style", "stylesheet");
  } else {
    vanilla_style.rel = "alternate stylesheet";
    accessibility_style.rel = "stylesheet";
    window.localStorage.setItem("style", "alternate stylesheet");
  }
}

function loadStyleFromLocalStorage() {
  // Fonction permettant de charger le style stocké dans le localStorage (permettant de garder le style entre les pages)

  if (!window.localStorage.getItem("style"))
    window.localStorage.setItem("style", "stylesheet");

  if (window.localStorage.getItem("style") !== "stylesheet") {
    let vanilla_style = document.getElementById("stylesheet");
    let accessibility_style = document.getElementById("alternate_stylesheet");
    vanilla_style.rel = "alternate stylesheet";
    accessibility_style.rel = "stylesheet";
  }
}

const questions = {
  norwegian_wood: [
      {
          question: "Who is the author of Norwegian Wood?",
          options: ["Haruki Murakami", "Kazuo Ishiguro", "Ryu Murakami", "Yukio Mishima"],
          correctAnswer: "Haruki Murakami"
      },
      {
          question: "In which year was Norwegian Wood released?",
          options: ["1987", "1997", "2007", "2017"],
          correctAnswer: "1987"
      },
      // Add more questions for other books
  ],
  // Add questions for other books
};

function showQuestion(bookId) {
  const bookQuestions = questions[bookId];
  if (!bookQuestions) {
      alert("Questions not available for this book.");
      return;
  }

  let score = 0;

  for (let i = 0; i < bookQuestions.length; i++) {
      const userAnswer = prompt(bookQuestions[i].question + "\n" + bookQuestions[i].options.join("\n"));
      if (userAnswer === bookQuestions[i].correctAnswer) {
          score++;
          alert("Correct!");
      } else {
          alert("Incorrect!");
      }
  }

  alert("Quiz finished!\nYour score: " + score + " out of " + bookQuestions.length);
}


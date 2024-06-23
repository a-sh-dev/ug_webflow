const textField = document.getElementById("score-url");
const rating = document.getElementById("score-rating");
const scoreValue = document.getElementById("score-value");
const scoreButton = document.getElementById("score-btn");

/**
 * Map the scores to an alphabetical rating.
 * Scores of 0-200 are F,
 * 201-400 are D,
 * 401-600 are C,
 * 601-800 are B,
 * and 801-950 are A.
 */
const getRating = (scoreValue) => {
  switch (true) {
    case scoreValue <= 200:
      rating.textContent = "F";
      break;
    case scoreValue >= 201 && scoreValue <= 400:
      rating.textContent = "D";
      break;
    case scoreValue >= 401 && scoreValue <= 600:
      rating.textContent = "C";
      break;
    case scoreValue >= 601 && scoreValue <= 800:
      rating.textContent = "B";
      break;
    case scoreValue >= 801 && scoreValue <= 950:
      rating.textContent = "A";
      break;
    default:
      // Anything bigger than 950
      rating.textContent = "A";
      break;
  }
};

// Fetch publicScore
const BASE_URL = "https://score.upguard.com/instantScore?website=";
const getPublicScore = async (input) => {
  try {
    const res = await fetch(`${BASE_URL}${input}`);
    const data = await res.json();

    if (data.statusCode === 422) {
      throw Error();
    }

    const publicScore = data.publicScore;

    // Update new scores to the document
    if (publicScore) {
      scoreValue.textContent = publicScore;
      getRating(publicScore);
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
  }
};

let userInput = "";
const handleScoreClick = () => {
  userInput = textField.value;
  getPublicScore(userInput);
};

scoreButton.addEventListener("click", handleScoreClick);

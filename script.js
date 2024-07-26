let numberToGuess = Math.floor(Math.random() * 999) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    let guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    let feedback = '';
    let feedbackElement = document.getElementById('feedback');

    if (guess < numberToGuess) {
        feedback = 'Too low!';
        feedbackElement.classList.remove('congrats');
    } else if (guess > numberToGuess) {
        feedback = 'Too high!';
        feedbackElement.classList.remove('congrats');
    } else {
        feedback = `Congratulations! You guessed the number in ${attempts} attempts.`;
        feedbackElement.classList.add('congrats');
    }

    feedbackElement.textContent = feedback;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
});

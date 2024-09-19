function checkAnswers() {
    let score = 0;
    let totalQuestions = 12;
    
    // Correct answers for the quiz
    let answers = {
        q1: 'Paris',
        q2: 'Mars',
        q3: 'Shakespeare',
        q4: 'Diamond',
        q5: 'Atom',
        q6: 'Jupiter',
        q7: 'Australia',
        q8: 'Leonardo',
        q9: '7',
        q10: 'Nitrogen',
        q11: 'Everest',
        q12: 'Pacific'
    };

    // Initialize the result container
    let resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    
    for (let i = 1; i <= totalQuestions; i++) {
        let selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        let questionResult = document.createElement('p');  // Create a paragraph for each question result

        if (selectedAnswer) {
            if (selectedAnswer.value === answers[`q${i}`]) {
                score++;
                questionResult.innerHTML = `Question ${i}: Correct!`;
                questionResult.style.color = 'green';  // Style for correct answers
            } else {
                questionResult.innerHTML = `Question ${i}: Incorrect. The correct answer is ${answers[`q${i}`]}.`;
                questionResult.style.color = 'red';  // Style for incorrect answers
            }
        } else {
            questionResult.innerHTML = `Question ${i}: Not answered. The correct answer is ${answers[`q${i}`]}.`;
            questionResult.style.color = 'orange';  // Style for unanswered questions
        }

        resultContainer.appendChild(questionResult);  // Append each question result
    }

    // Final score display
    let finalScore = document.createElement('h2');
    finalScore.innerHTML = `You scored ${score} out of ${totalQuestions}.`;
    resultContainer.appendChild(finalScore);
}

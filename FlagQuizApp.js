function startQuiz()
{
  const guess1 = prompt('What does this 1st country?');

  if (guess1.toLowerCase() === 'malaysia') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Malaysia.');
  }

  const guess2 = prompt('What does this 2nd country?');

  if (guess2.toLowerCase() === 'singapore') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Singapore.');
  }

  const guess3 = prompt('What does this 3rd country?');

  if (guess3.toLowerCase() === 'china') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was China.');
  }

  const guess4 = prompt('What does this 4th country?');

  if (guess4.toLowerCase() === 'taiwan') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Taiwan.');
  }

  const guess5 = prompt('What does this 5th country?');

  if (guess5.toLowerCase() === 'japan') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Japan.');
  }
}
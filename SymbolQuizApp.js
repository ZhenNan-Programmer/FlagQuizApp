function startQuiz() {
  const guess1 = prompt('What does this 1st symbol?');

  if (guess1.toLowerCase() === 'heart') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Heart.');
  }

  const guess2 = prompt('What does this 2nd symbol?');

  if (guess2.toLowerCase() === 'tick') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Tick.');
  }

  const guess3 = prompt('What does this 3rd symbol?');

  if (guess3.toLowerCase() === 'burger') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Burger.');
  }

  const guess4 = prompt('What does this 4th symbol?');

  if (guess4.toLowerCase() === 'watermelon') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Watermelon.');
  }

  const guess5 = prompt('What does this 5th country?');

  if (guess5.toLowerCase() === 'crying') {
    alert('Your guessed the correct answer!');
  } else {
    alert('Sorry, that is not the correct answer. The answer was Crying.');
  }
}
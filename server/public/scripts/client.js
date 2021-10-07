$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  // click listeners
  $('#submitButton').on('click', playRound )
  $('#restartButton').on('click', restartGame)

};

function getGuesses(){
    // get guesses from the server
    $.ajax({
      method: 'GET',
      url: '/results'
  }).then(function(response) {
      console.log('this is resultsArray: ', response);
      renderToDom(response);
  }).catch(function(response){
      console.log('Request Failed');
  })
} 


// render guesses to table
function renderToDom(response){
    $('#resultsTable').empty();

    for ( let round of response){
        $('#resultsTable').append(`
        <tr>
            <td>${round.playerOneGuess}</td>
            <td>${round.playerOneResult}</td>
            <td>${round.playerTwoGuess}</td>
            <td>${round.playerTwoResult}</td>
        </tr>
        `)
    }
 }



function playRound(){
  $.ajax({
      method: 'POST',
      url: '/guesses',
      data: {
          playerOneGuess: $('#playerOneGuessIn').val(),
          playerTwoGuess: $('#playerTwoGuessIn').val(),
          playerThreeGuess: $('#playerThreeGuessIn').val(),
          playerFourGuess: $('#playerFourGuessIn').val()
      }
  }).then(function (response){
      console.log('Success POST', response );
      getGuesses();
      $('#playerOneGuessIn').val('');
      $('#playerTwoGuessIn').val('');
      $('#playerThreeGuessIn').val('');
      $('#playerFourGuessIn').val('');
  }).catch(function(response){
      console.log('THIS FAILED POST');
  })

}


function restartGame() {
    $('#playerOneGuessIn').val('');
    $('#playerTwoGuessIn').val('');
    $('#playerThreeGuessIn').val('');
    $('#playerFourGuessIn').val('');

    $('#resultsTable').remove();
    
}


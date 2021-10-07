$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  // click listeners
  $('#submitButton').on('click', playRound )


};

function getGuesses(){
    // get guesses from the server
    $.ajax({
      method: 'GET',
      url: '/guesses'
  }).then(function(response) {
      console.log('SUCCESS!!', response);
      renderToDom(response);
  }).catch(function(response){
      console.log('Request Failed');
  })
} 


// render guesses to table
function renderToDom(){
    $('#resultsTable').empty();

    // for ( let guess of guesses){
    //     $('#resultsTable').append(`
    //     <tr>
    //         <td>${playerOneGuess.text}</td>
    //         <td>${playerOneResult.text}</td>
    //         <td>${playerTwoGuess.text}</td>
    //         <td>${playerTwoResult.text}</td>
    //         <td>${playerThreeGuess.text}</td>
    //         <td>${playerThreeResult.text}</td>
    //         <td>${playerFourGuess.text}</td>
    //         <td>${playerFourResult.text}</td>
    //     </tr>
    //     `)
//     }
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
      renderToDom();
      $('#playerOneGuessIn').val('');
      $('#playerTwoGuessIn').val('');
      $('#playerThreeGuessIn').val('');
      $('#playerFourGuessIn').val('');
  }).catch(function(response){
      console.log('THIS FAILED POST');
  })

}
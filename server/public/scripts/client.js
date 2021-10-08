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
function renderToDom(arr){
    $('#resultsTable').empty();
    for ( let index of arr){
        console.log('render to DOM round for of loop', index);
    //  for (let i = 0; i<arr.length; i++){
        if(index.playerOneResult == 'winner') {
            alert('Winner!: Player 1!!')
        } else if (index.playerTwoResult == 'winner') {
            alert('Winner!: Player 2!!!')
        } else if(index.playerThreeResult == 'winner') {
            alert('Winner!: Player 3!!!')
        } else if(index.playerFourResult == 'winner') {
            alert('Winner!: Player4!!!!');
        }
        $('#resultsTable').append(`
            <tr>
                <td>${index.playerOneGuess}</td>
                <td>${index.playerOneResult}</td>
                <td>${index.playerTwoGuess}</td>
                <td>${index.playerTwoResult}</td>
                <td>${index.playerThreeGuess}</td>
                <td>${index.playerThreeResult}</td>
                <td>${index.playerFourGuess}</td>
                <td>${index.playerFourResult}</td>
            </tr>
            `)
        }
    $('#roundDisplay').empty();
    $('#roundDisplay').append(arr.length)
    // }
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
      console.log('POST FAILED');
  })

}


function restartGame() {
    $.ajax({
        method: 'GET',
        url: '/reset'
    }).then(function(response) {
        renderToDom(response);
    })
    // $('#resultsTable').remove();
}


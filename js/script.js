$(function(){
console.log("DOM ready");
var turnCount = 0;
var X = 'X';
var O = 'O';
var blank = '';

  $('#board').find('.btn').one('click', function(){
    if(turnCount % 2 === 0){
      $(this).text(X);
      checkForWinner();
    } else {
      $(this).text(O);
      checkForWinner();
    }
    turnCount++;
    console.log(turnCount);
  })

  $('#newGame').on('click', function(){
    location.reload();
  });


  function checkForWinner(){
    //checking row 1 for same values
    if ($('#1').text() != ''){
      if ($('#1').text() == $('#2').text() &&
        $('#2').text() == $('#3').text())
        {console.log('winner!');}
      }
    if ($('#4').text() != ''){
      if ($('#4').text() == $('#5').text() &&
        $('#5').text() == $('#6').text())
        {console.log('winner!');}
      }
    if ($('#7').text() != ''){
      if ($('#7').text() == $('#8').text() &&
        $('#8').text() == $('#9').text())
        {console.log('winner!');}
      }
    if ($('#1').text() != ''){
      if ($('#1').text() == $('#4').text() &&
        $('#4').text() == $('#7').text())
        {console.log('winner!');}
      }
    if ($('#2').text() != ''){
      if ($('#2').text() == $('#5').text() &&
        $('#5').text() == $('#8').text())
        {console.log('winner!');}
      }
    if ($('#3').text() != ''){
      if ($('#3').text() == $('#9').text() &&
        $('#6').text() == $('#9').text())
        {console.log('winner!');}
      }
    if ($('#1').text() != ''){
      if ($('#1').text() == $('#5').text() &&
        $('#5').text() == $('#9').text())
        {console.log('winner!');}
      }
      if ($('#7').text() != ''){
        if ($('#7').text() == $('#5').text() &&
          $('#5').text() == $('#3').text())
          {console.log('winner!');}
        }

  }



})

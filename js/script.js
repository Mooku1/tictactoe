$(function(){
  console.log("DOM ready");

  var turnCount = 0;
  var X = 'X';
  var O = 'O';
  var player = 1;


    $('#board').find('.btn').one('click', function(){
      if(turnCount % 2 === 0){
        $(this).text(X);
        checkForWinner();
        checkForDraw();
        player = "Player 2";
        $('#message').text(player + "'s turn! ")
      } else {
        $(this).text(O);
        checkForWinner();
        checkForDraw();
        player = "Player 1";
        $('#message').text(player +"'s turn! ")
      }
      turnCount++;
      console.log(turnCount);
    })


    $('#newGame').on('click', function(){
      location.reload();
    })

  function playerTurn(){
    if (turnCount%2 === 0){
      player = "Player 2"
    }
  }

  function checkForDraw(){
    if (turnCount == 8 ){
      $('#message').text("Draw!");
      {alert("Draw!");}
    }
  }

  function checkForWinner(){
    if ($('#1').text() != ''){
      if ($('#1').text() == $('#2').text() &&
        $('#2').text() == $('#3').text())
        {$('#message').text(player + ' wins!');
        {alert(player + ' wins!');}
      }
      }
    if ($('#4').text() != ''){
      if ($('#4').text() == $('#5').text() &&
        $('#5').text() == $('#6').text())
        {$('#message').text(player + ' wins!');
        {alert(player + ' wins!');}
        }
      }
    if ($('#7').text() != ''){
      if ($('#7').text() == $('#8').text() &&
        $('#8').text() == $('#9').text())
        {$('#message').text(player + ' wins!');
        {alert(player + ' wins!');}
        }
      }
    if ($('#1').text() != ''){
      if ($('#1').text() == $('#4').text() &&
        $('#4').text() == $('#7').text())
        {$('#message').text(player + ' wins!');
        {alert(player + ' wins!');}
        }
      }
    if ($('#2').text() != ''){
      if ($('#2').text() == $('#5').text() &&
        $('#5').text() == $('#8').text())
        {$('#message').text(player + ' wins!');
        {alert(player + ' wins!');}
        }
      }
    if ($('#3').text() != ''){
      if ($('#3').text() == $('#9').text() &&
        $('#6').text() == $('#9').text())
        {$('#message').text(player + ' wins!');
        {alert(player + ' wins!');}
        }
      }
    if ($('#1').text() != ''){
      if ($('#1').text() == $('#5').text() &&
        $('#5').text() == $('#9').text())
        {$('#message').text(player + ' wins!');
          {alert(player + ' wins!');}
        }
      }
    if ($('#7').text() != ''){
      if ($('#7').text() == $('#5').text() &&
        $('#5').text() == $('#3').text())
        {$('#message').text(player + ' wins!');
        {alert(player + ' wins!');}
        }
      }

  }

})



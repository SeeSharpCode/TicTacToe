$(function() {
  var currentPlayer = "X";

  $('td').click(function() {
    if ($(this).text()) {
      return;
    }

    $(this).text(currentPlayer);

    if (currentPlayer === "X") {
      $(this).addClass('x');
    } else {
      $(this).addClass('o');
    }

    if (checkForWinner()) {
      $('#winner').text(currentPlayer + ' wins!');
    } else {
      currentPlayer = (currentPlayer === "X") ? "O" : "X";
    }
  });

  function checkForWinner() {
    var rows = $('#gameBoard tr');
    var columns = $('#gameBoard tr td:nth-child(1)');

    var cell1 = getTableCell(1,1);
    var cell2 = getTableCell(1,2);
    var cell3 = getTableCell(1,3);
    var cell4 = getTableCell(2,1);
    var cell5 = getTableCell(2,2);
    var cell6 = getTableCell(2,3);
    var cell7 = getTableCell(3,1);
    var cell8 = getTableCell(3,2);
    var cell9 = getTableCell(3,3);

    var winningCombos = [
      [cell1, cell2, cell3],
      [cell4, cell5, cell6],
      [cell7, cell8, cell9],
      [cell1, cell4, cell7],
      [cell2, cell5, cell8],
      [cell3, cell6, cell9],
      [cell1, cell5, cell9],
      [cell3, cell5, cell7]
    ];

    for (var i in winningCombos) {
      if (isWinningCombo(winningCombos[i])) {
        return true;
      }
    }

    return false;
  }

  function getTableCell(row, column) {
    return $('#gameBoard tr:nth-child(' + row + ') td:nth-child(' + column + ')');
  }

  function isWinningCombo(combo) {
    if (!$(combo[0]).text() && !$(combo[1]).text() && !$(combo[2]).text()) {
      return false;
    }

    return $(combo[0]).text() === $(combo[1]).text()
      && $(combo[0]).text() === $(combo[2]).text();
  }
});

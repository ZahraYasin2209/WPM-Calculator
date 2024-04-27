$(document).ready(function() {
    var quote = $("#quote").text().trim().split(" ");
    var totalWords = quote.length;
    var wordCount = 0;
    var timerInterval;

    $("#start-btn").click(function() {
      $(this).prop("disabled", true);
      $("#input-text").prop("disabled", false).val("").focus();
      $("#result").hide();
      $("#timer").show();
      $("#time-left").text("1:00");
      wordCount = 0;
      startTimer();
    });

    $("#input-text").keyup(function() {
      var input = $(this).val().trim();
      var typedWords = input.split(/\s+/).filter(function(word) {
        return word.length > 0;
      });
      wordCount = typedWords.length;
    });

    function startTimer() {
      var duration = 60; // 1 minute
      var start = Date.now();
      timerInterval = setInterval(function() {
        var elapsedSeconds = Math.floor((Date.now() - start) / 1000);
        var remainingSeconds = duration - elapsedSeconds;

        var minutes = Math.floor(remainingSeconds / 60);
        var seconds = remainingSeconds % 60;

        if (remainingSeconds <= 0) {
          clearInterval(timerInterval);
          $("#input-text").prop("disabled", true);
          $("#start-btn").prop("disabled", false);
          $("#result").show();
          $("#word-count").text(wordCount);
        } else {
          $("#time-left").text(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
        }
      }, 1000);
    }
  });
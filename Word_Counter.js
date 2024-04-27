$(document).ready(function() {
    $("#word-count-btn").click(function() {
      var input = $("#word-input").val().trim();
      var wordCount = input.split(/\s+/).filter(function(word) {
        return word.length > 0;
      }).length;
      $("#word-result").show();
      $("#word-count").text(wordCount);
    });
  });
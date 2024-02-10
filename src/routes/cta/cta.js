$(function () {
  $(".navbar-brand").click(function (event) {
    event.preventDefault();
  });

  $(document).on("click", ".join-meeting", function () {
    $(".enter-code").focus();
  });
  $(document).on("click", ".join-action", function () {
    var join_value = $(".enter-code").val();
    if (!join_value) return;
    var meetingUrl = window.location.origin + "?meetingID=" + join_value;
    window.location.replace(meetingUrl);
  });
  $(document).on("click", ".new-meeting", function () {
    var eight_d_value = Math.floor(Math.random() * 100000000);
    var meetingUrl = window.location.origin + "?meetingID=" + eight_d_value;
    window.location.replace(meetingUrl);
  });
});

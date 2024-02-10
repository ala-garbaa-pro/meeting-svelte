$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  var meeting_id = urlParams.get("meetingID");
  var user_id = window.prompt("Enter your display name");

  if (!user_id || !meeting_id) {
    alert("User id or meeting id missing");
    window.location.href = "/cta";
    return;
  }
  $("#meetingContainer").show();

  MyApp._init(user_id, meeting_id);

  $(".chat-message-sent-input-field").on("keypress", function (e) {
    if (e.which == 13) {
      $(".chat-message-sent-action").trigger("click");
    }
  });
});

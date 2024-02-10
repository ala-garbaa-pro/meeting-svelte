<script>
  import "./cta";
</script>

<main style="min-height: 87vh; padding-top: 3rem;">
  <div class="jumbotron h-100 d-flex">
    <div class="d-flex flex-sm-row flex-column">
      <div class="container">
        <h1 class="display-1" style="font-size: 6.4vw">
          Connect Virtually with Ease
        </h1>
        <h2 class="display-4 mb-3" style="font-size: 2.2vw">
          The Ultimate Video Meeting App
        </h2>

        <ul class="mt-5 display-center justify-content-start">
          <li>
            <button
              class="btn btn-lg btn-outline-success text-dark font-weight-bold display-center"
              style="
                  background-color: #ffffff;
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                "
              autofocus={true}
            >
              <span class="material-icons mr-2">keyboard</span><input
                type="text"
                placeholder="Enter a code"
                style="border: none"
                class="enter-code"
              />
            </button>
          </li>
          <li
            class="btn btn-outline-success btn-lg font-weight-bold join-meeting join-action"
            style="
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                height: 50px;
              "
          >
            Join
          </li>
        </ul>
        <p class="my-3 text-muted">- OR -</p>
        <ul class="mt-3 display-center justify-content-start">
          <li style="padding: 0">
            <button
              class="btn btn-success btn-lg text-light font-weight-bold display-center new-meeting"
            >
              <span class="material-icons mr-2">video_call</span>New Meeting
            </button>
          </li>
        </ul>
      </div>
      <div class="container">
        <img
          src="/images/ill.svg"
          alt="illustration"
          style="width: auto; height: 70vh; margin-left: 8vw"
        />
      </div>
    </div>
  </div>
</main>

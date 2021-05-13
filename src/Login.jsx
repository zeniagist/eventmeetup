import React from "react";
function Login() {
  return (
    <div className="App">
      <h1 className='eventTitle' >Welcome to Event Meetup</h1>
      <h3 className="eventDetails">
      Log in to see upcoming events around the world for full-stack developers </h3>
      <div className="button_cont" align="center">
        <div class="google-btn">
          <div class="google-icon-wrapper">
            <img
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google sign-in"
            />
          </div>
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth/identifier?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=1021042902211-7e2b9nm32mg4jct1egghdcc09isfvu74.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fzeniagist.github.io%2Feventmeetup&flowName=GeneralOAuthFlow"
            rel="nofollow noopener"
            class="btn-text"
          >
            <b>Sign in with google</b>
          </a>
        </div>
      </div>
      <a
        href="https://zeniagist.github.io/eventmeetup/privacy.html"
        rel="nofollow noopener"
        className='privacyPolicy'
      >
        Privacy policy
      </a>
    </div>
  );
}
export default Login;
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const ForgotPassword = () => {
  const handleForgotPassword = useCallback(
    async event => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await app
          .auth()
          .resetPassword(email.value);
        alert("Check your inbox for further instructions");
      } catch (error) {
        alert("Failed to reset password");
      }
    },
    []
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleForgotPassword}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        {/* <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label> */}
        <button type="submit">Submit</button>
      </form>
      <div>
      <a href="/forgot-password">Forgot Password?</a>
          </div>
    </div>
  );
};

export default withRouter(ForgotPassword);
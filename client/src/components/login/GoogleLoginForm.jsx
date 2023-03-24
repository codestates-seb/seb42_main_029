import React, { useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

// 클라 id value
const clientId = process.env.REACT_APP_CLIENT_ID;

function GoogleLoginForm() {
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("로그인에러");
          }}
          style={{ width: "250px" }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default GoogleLoginForm;

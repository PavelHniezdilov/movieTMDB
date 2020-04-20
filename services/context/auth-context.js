import React, { useEffect, useState, createContext } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";

export const AuthContext = createContext({
  user: null,
  initializing: null,
  signIn: () => {},
  signOut: () => {},
  logIn: () => {},
  googleSignIn: () => {},
  loadingMail: false,
  loadingGoogle: false
});

export const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLoadingMail, setIsLoadingMail] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "1048247709811-4jpmemrk8s2baqghmql31jsctcqsrc84.apps.googleusercontent.com" // From Firebase Console Settings
    });
  }, []);

  useEffect(() => {
    if (error) {
      let message = error.message;

      if (error.code === "auth/email-already-in-use") {
        message = "That email address is already in use!";
      } else if (error.code === "auth/invalid-email") {
        message = "That email address is invalid!";
      }

      Alert.alert("An Error Occurred!", message, [{ text: "Okay" }]);
    }
  }, [error]);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signIn = (email, password) => {
    setIsLoadingMail(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        setIsLoadingMail(false);
      })
      .catch(error => {
        setError(error);
        setIsLoadingMail(false);
      });
  };

  const logIn = (email, password) => {
    setIsLoadingMail(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account log in!");
        setIsLoadingMail(false);
      })
      .catch(error => {
        setError(error);
        setIsLoadingMail(false);
      });
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  const googleSignIn = async () => {
    setIsLoadingGoogle(true);
    onGoogleButtonPress()
      .then(() => {
        console.log("Signed in with Google!");
        setIsLoadingGoogle(false);
      })
      .catch(error => {
        setError(error);
        setIsLoadingGoogle(false);
      });
  };

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        initializing,
        signIn,
        signOut,
        logIn,
        googleSignIn,
        loadingMail: isLoadingMail,
        loadingGoogle: isLoadingGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

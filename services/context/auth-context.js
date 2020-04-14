import React, { useEffect, useState, createContext } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";

export const AuthContext = createContext({
  user: null,
  initializing: null,
  signIn: () => {},
  signOut: () => {},
  logIn: () => {}
});

export const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState();

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
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch(error => {
        setError(error);
      });
  };

  const logIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account log in!");
      })
      .catch(error => {
        setError(error);
      });
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        initializing,
        signIn: signIn,
        signOut: signOut,
        logIn: logIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

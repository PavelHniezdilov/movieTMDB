import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Keyboard,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import Btn from "../ui/Btn";
import BtnText from "../ui/BtnText";
import { useForm } from "../../services/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE
} from "../../services/utils/validators";
import Input from "../ui/Input";
import { AuthContext } from "../../services/context/auth-context";
import Colors from "../../constants/Colors";

const Auth = props => {
  const {
    signIn,
    logIn,
    googleSignIn,
    loadingMail,
    loadingGoogle
  } = useContext(AuthContext);
  const [isSignIn, setIsSignIn] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    setFormData(
      {
        ...formState.inputs
      },
      formState.inputs.email.isValid && formState.inputs.password.isValid
    );
  }, [inputHandler]);

  const submitHandler = event => {
    Keyboard.dismiss();

    if (formState.isValid) {
      const email = formState.inputs.email.value;
      const password = formState.inputs.password.value;

      if (!isSignIn) {
        signIn(email, password);
      } else {
        logIn(email, password);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        style={styles.bg}
        source={require("../../assets/imgs/auth-bg.jpg")}
      >
        <View style={styles.content}>
          <Image
            style={styles.img}
            source={require("../../assets/imgs/logo.png")}
          />

          <Input
            id="email"
            placeholder="Email"
            validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid email."
            onInput={inputHandler}
            styleWrap={styles.input}
          />

          <Input
            id="password"
            placeholder="Password"
            validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_REQUIRE()]}
            errorText="Please enter a password, at least 6 characters."
            onInput={inputHandler}
            styleWrap={styles.input}
            secureText
          />

          <View style={styles.btnBox}>
            {loadingMail ? (
              <ActivityIndicator size="small" color={Colors.main_text} />
            ) : (
              <Btn onPress={submitHandler}>
                {isSignIn ? "Sign in" : "Create account"}
              </Btn>
            )}
          </View>
          <View style={styles.btnChange}>
            <BtnText
              onPress={() => {
                setIsSignIn(prevState => !prevState);
              }}
            >{`Switch to ${isSignIn ? "create account" : "sign in"}`}</BtnText>
          </View>

          <View style={styles.googleBox}>
            {loadingGoogle ? (
              <ActivityIndicator size="small" color={Colors.main_text} />
            ) : (
              <Btn style={styles.google} onPress={googleSignIn}>
                Sign in with Google
              </Btn>
            )}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

Auth.propTypes = {};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  input: {
    marginTop: 30
  },
  btnBox: {
    marginTop: 50
  },
  btnChange: {
    marginTop: 15
  },
  googleBox: {
    marginTop: 50
  },
  google: {
    backgroundColor: "#DB4437"
  }
});

export default Auth;

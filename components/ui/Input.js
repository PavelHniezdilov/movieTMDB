import React, { useReducer, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";
import { validate } from "../../services/utils/validators";
import TextCommon from "./TextCommon";
import Colors from "../../constants/Colors";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { onInput, id } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = text => {
    dispatch({
      type: "CHANGE",
      val: text,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH"
    });
  };

  return (
    <View style={{ ...styles.wrap, ...props.styleWrap }}>
      <TextCommon style={styles.label}>{props.placeholder}</TextCommon>
      <TextInput
        id={props.id}
        onChangeText={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        style={styles.input}
        secureTextEntry={props.secureText}
      />
      {!inputState.isValid && inputState.isTouched && (
        <TextCommon style={styles.textError}>{props.errorText}</TextCommon>
      )}
    </View>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errorText: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  validators: PropTypes.array.isRequired,
  onInput: PropTypes.func.isRequired,
  initialValid: PropTypes.bool,
  styleWrap: PropTypes.object,
  secureText: PropTypes.bool
};

const styles = StyleSheet.create({
  wrap: {
    width: "100%"
  },
  label: {
    fontSize: 12,
    color: Colors.input_label
  },
  input: {
    color: Colors.input_text,
    borderBottomWidth: 1,
    borderColor: Colors.input_bd
  },
  textError: {
    marginTop: 5,
    color: "red",
    fontSize: 12
  }
});

export default Input;

import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Keyboard, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Input from "../ui/Input";
import { useForm } from "../../services/hooks/form-hook";
import Btn from "../ui/Btn";
import { VALIDATOR_MINLENGTH } from "../../services/utils/validators";
import Title from "../ui/Title";
import { NavigationContext } from "react-navigation";

const SearchForm = props => {
  const navigation = useContext(NavigationContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      search: {
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
      formState.inputs.search.isValid
    );
  }, [inputHandler]);

  const submitHandler = event => {
    Keyboard.dismiss();
    if (formState.isValid) {
      navigation.navigate("MoviesList", {
        role: "search",
        title: `Search: ${formState.inputs.search.value}`,
        query: formState.inputs.search.value
      });
    }
  };

  return (
    <View style={styles.wrap}>
      <ScrollView>
        <View style={styles.content}>
          <Title styleWrap={styles.title}>Search</Title>
          <Input
            id="search"
            placeholder="Enter your keywords"
            validators={[VALIDATOR_MINLENGTH(3)]}
            errorText="Please enter a text, at least 3 characters."
            onInput={inputHandler}
          />
          <View style={styles.btnBox}>
            <Btn onPress={submitHandler}>Find</Btn>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

SearchForm.propTypes = {};

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    paddingHorizontal: 50
  },
  btnBox: {
    marginTop: 30
  },
  content: {
    paddingVertical: 20,
    alignItems: "center"
  }
});

export default SearchForm;

import React, { useState, useEffect, createContext } from "react";
import database from "@react-native-firebase/database";

export const FavouriteContext = createContext({
  data: null,
  addFavourite: () => {},
  deleteFavourite: () => {},
  dataInit: () => {}
});

export const FavouriteProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  function transformData(data) {
    let dataArray = [];

    for (let key in data) {
      dataArray.push({
        id: parseInt(key),
        title: data[key]
      });
    }

    setData(dataArray);
  }

  const dataInit = userAuth => {
    const userId = userAuth._user.uid;
    setUser(userId);

    database()
      .ref(`/users/${userId}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          transformData(snapshot.val());
        } else {
          setData([]);
        }
      });
  };

  useEffect(() => {
    if (user) {
      database()
        .ref(`/users/${user}`)
        .on("value", snapshot => {
          if (snapshot.val()) {
            transformData(snapshot.val());
          } else {
            setData([]);
          }
          console.log("User data: ", snapshot.val());
        });
    }
  }, [user]);

  const addFavourite = (id, title) => {
    database()
      .ref(`/users/${user}`)
      .update({
        [id]: title
      })
      .then(() => {
        console.log("Data set.");
      });
  };

  const deleteFavourite = id => {
    setUser(user);
    database()
      .ref(`/users/${user}/${id}`)
      .remove();
  };

  return (
    <FavouriteContext.Provider
      value={{
        data,
        addFavourite,
        deleteFavourite,
        dataInit
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

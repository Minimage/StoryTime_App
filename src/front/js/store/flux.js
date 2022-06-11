const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      audioLink: "",
      message: null,
      word: [],
      users: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      getWords: () => {
        fetch(process.env.BACKEND_URL + "/api/word")
          .then((resp) => resp.json())
          .then((data) => setStore({ word: data }))
          .catch((error) => console.error("error loading from the backend"));
      },
      getAudio: (word) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
          .then((resp) => resp.json())
          .then((data) => {
            let audio = data[0].phonetics.find((item) => {
              if (item.audio != "") {
                return item.audio;
              }
            });
            setStore({ audioLink: audio });
          })
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      //____________________________________________________________________________________________________________
    },
  };
};

export default getState;

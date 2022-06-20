const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
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
      //____________________________________________________________________________________________________________

      audioLink: "",
      word: [],
      // initializeLesson: {},
      // loadNextLesson: {},
      current_lesson: { name: undefined, next: null },
      user: null,
      key: [],
      token: "null",
    },
    actions: {
      protect: (token) => {
        fetch(process.env.BACKEND_URL + "/api/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((result) => setStore({ key: result }));
      },

      syncTokenSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (store.token && store.token != "" && store.token != undefined)
          setStore({ token: data.access_token });
      },

      login: async (username, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            options
          );
          if (resp.status !== 200) {
            alert("There has been some error!!!");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      createUser: (first_name, last_name, email, username, password) => {
        fetch(process.env.BACKEND_URL + "/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
          },
          body: JSON.stringify({
            first_name,
            last_name,
            username,
            email,
            password,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            // setStore({ user: data });
            console.log(data);
          })
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      //____________________________________________________________________________________

      // initializeLesson: () => {
      //   const store = getStore();
      //   if (
      //     store.current_lesson.name === undefined ||
      //     store.current_lesson.next === null
      //   ) {
      //     fetch(process.env.BACKEND_URL + "/api/lesson/1"), {
      //       headers: {
      //         "Content-Type": "application/json",
      //         "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
      //       },
      //     }
      //       .then((resp) => resp.json())
      //       .then((data) => {
      //         setStore({ current_lesson: data });
      //       })
      //       .catch((error) =>
      //         console.log("Error loading message from backend", error)
      //       );
      //   }
      // },
      // loadNextLesson: () => {
      //   const store = getStore();
      //   fetch(store.current_lesson.next, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
      //     },
      //   })
      //     .then((resp) => {resp.json()})
      //     .then((data) => {
      //       setStore({ current_lesson: data });
      //     })
      //     .catch((error) => console.log(error, store.current_lesson));
      // },
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
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/word")
          .then((resp) => resp.json())
          .then((data) => setStore({ word: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },

    // Use getActions to call a function within a fuction

    //This function will give us a button to play pronounciations.
  };
};

export default getState;

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
      initializeLesson: {},
      loadNextLesson: {},
      current_lesson: { name: undefined, next: null },
      user: null,
      key:[]
    },
    actions: {
      createUser: (first_name, last_name, email, username, password) => {
        fetch(process.env.BACKEND_URL + "/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ first_name, last_name, username, email, password })
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
        //  protect: (token) => {
        //   fetch(process.env.BACKEND_URL + "/api/protected", {
        //     method: "GET",
        //     headers: {
        //       Authorization: `Bearer ${token}`
        //     },
        //   })
        //   .then((response) => response.json())
        //   .then((result) => setStore({key:result}))
          
        // },

        login: async (username, password) => {
          
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
          })
          .then((response) => response.json())
          // .then((result) => getActions().protect(result.access_token))
          .catch((error) => console.log("error", error));

          // if (!response.ok) throw Error("There was a problem in the login request")

          // if (response.status === 401) {
          //   throw ("Invalid credentials")
          // }
          // else if (response.status === 400) {
          //   throw ("Invalid email or password format")
          // }
          // const data = await resp.json()
          // save your token in the localStorage
          //also you should set your user into the store using the setStore function
          // localStorage.setItem("jwt-token", data.token);

          // return data
        },
        //____________________________________________________________________________________       
    


      initializeLesson: () => {
        const store = getStore();
        if (
          store.current_lesson.name === undefined ||
          store.current_lesson.next === null
        ) {
          fetch(process.env.BACKEND_URL + "/api/lesson/1")
            .then((resp) => resp.json())
            .then((data) => {
              setStore({ current_lesson: data });
            })
            .catch((error) =>
              console.log("Error loading message from backend", error)
            );
        }
      },
      loadNextLesson: () => {
        const store = getStore();
        fetch(store.current_lesson.next, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ current_lesson: data });
          })
          .catch((error) => console.log(error, store.current_lesson));
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

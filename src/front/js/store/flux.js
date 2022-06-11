const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
//____________________________________________________________________________________________________________
			audioLink: '',
			word: [],
			initializeLesson: {},
			loadNextLesson: {},

		},
		actions: {
			initializeLesson: () => {
				const store = getStore();
				if (store.current_lesson.name === undefined || store.current_lesson.next === null) {
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
				fetch(store.current_lesson.next)
				  .then((resp) => resp.json())
				  .then((data) => {
					setStore({ current_lesson: data });
				  })
				  .catch((error) =>
					console.log(error, store.current_lesson)
				  );
			  },
		},
			
			// Use getActions to call a function within a fuction

			//This function will give us a button to play pronounciations.
			getAudio: (word) => {
				fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
					.then(resp => resp.json())
					.then(data => {
						let audio = data[0].phonetics.find((item) => {
							if (item.audio != '') {
								return item.audio
							}
						})
						setStore({ audioLink: audio })
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
//____________________________________________________________________________________________________________
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getWords: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/word")
					.then(resp => resp.json())
					.then(data => setStore({ word: data }))
					.catch(error => console.log("Error loading message from backend", error));
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
			}
		}
	};


export default getState;

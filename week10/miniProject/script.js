

  let action = document.querySelector('button')
  action.addEventListener('onclick', function(event){
    const asyncFunc = async () => {
        try {
          const randomIndex = Math.floor(Math.random() * users.length);
          const randomUser = users[randomIndex];
            //in the link replace the 72 with the math random function so that it will pull a new number each time
          let response = await fetch("https://www.swapi.tech/api/people/",randomUser, {
            method: "GET",
            headers: {
              "content-Type": "application/json",
            },
            //need a 2nd fetch for the character's hometown 
          });
          let status = await response.status;
          if (status = 200) {
              let data = await response.json()
              console.log(data);
          }
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      
      asyncFunc()
  })


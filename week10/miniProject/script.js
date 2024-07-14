

  let action = document.querySelector('button')
  action.addEventListener('click', function(event){
    event.preventDefault()
    //prevent.Default prevents the button from being just a submit button by default
    const asyncFunc = async () => {
        try {
          const randomIndex = Math.floor(Math.random() * 83);
          //we use 83 here because that is the total number of characters
            //in the link replace the 72 with the math random function so that it will pull a new number each time
          let response = await fetch(`https://www.swapi.tech/api/people/${randomIndex}`, {
            method: "GET",
            headers: {
              "content-Type": "application/json",
            },
            //need a 2nd fetch for the character's hometown 
          });
          let status = await response.status;
          if (status = 200) {
              let data = await response.json()
              let homeworld = await fetch(data.result.properties.homeworld, {
                method: "GET",
                headers: {
                  "content-Type": "application/json",
                },
              })
              // the result, properties, hometown tree is the order from the JSON that we have from our link
              let town = await homeworld.json()
              console.log(town);
              console.log(data);
          }
          // console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      
      asyncFunc()
  })

  function render(arr) {
    root.innerHTML = ''
    arr.forEach(item => {
        const {id, gender, birthyear, homeworld} = item
        const div = document.createElement("div")
        img.addEventListener('click',() => {
            alert(image)
        })
        const h2 = document.createElement('h2')
        const p = document.createElement("p")
        // img.src = image
        h2.innerText = name
        // p.textContent = email

        // div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)

        div.classList.add("card")

        root.appendChild(div)
    })
}

render()

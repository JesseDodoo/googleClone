
async function getSite(e) {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/search')
      const data = await res.json()
      console.log(data)
      const result = document.getElementById('results')
      
      for (let i = 0; i < data.length;  i++) {
        const element = data[i];
        console.log(element)

        result.innerHTML += 
        `<ul>
        <li>${element.web}</li>
            </ul> `
        
      }

  }
  let formBtn1 = document.querySelector("#s-1");
  formBtn1.addEventListener('submit', getSite)



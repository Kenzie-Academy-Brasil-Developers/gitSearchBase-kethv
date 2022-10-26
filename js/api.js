const baseUrl = "https://api.github.com/users";

 export async function getUser(name) {
  const data = await fetch(`${baseUrl}/${name}` , {
    method: "GET", 
    headers: {
        "Content-Type":	"application/json"
    }
    
  })
    .then((response) => {
      return response.json();
    })
    // .then((responseJson) => {
    // //   console.log(responseJson);
    //   localStorage.setItem("user", name)
    // })
    // .catch((error) => console.log(error));
  return data;
}

export async function repos(name) {
    const data = await fetch(`${baseUrl}/${name}/repos` , {
      method: "GET", 
      headers: {
          "Content-Type":	"application/json"
      }
      
    })
      .then((response) => {
        return response.json();
      })
      
      .catch((error) => console.log(error));

    
    return data;

  
  }
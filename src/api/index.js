const decoder = async(response) => {
  if(response.ok){
    const reader = response.body.getReader();
    const {value} = await reader.read();
    let result = new TextDecoder("utf-8").decode(value);
    return JSON.parse(result)
  }
}

export const createPost = async(url, obj) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  });
  return decoder(response)
}

export const getPosts = async() => {
  const response = await fetch('http://localhost:4000/app/getPosts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  });
  return decoder(response)
}

const decoder = async(response) => {
  if(response.ok){
    const reader = response.body.getReader();
    const {value} = await reader.read();
    let result = new TextDecoder("utf-8").decode(value);
    return JSON.parse(result)
  }
}

export const createPost = async(obj) => {
  const response = await fetch('http://localhost:4000/app/createPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  });
  return decoder(response)
}

export const createComment = async(obj) => {
  const response = await fetch('http://localhost:4000/app/createComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  });
  return decoder(response)
}

export const getComments = async() => {
  const response = await fetch('http://localhost:4000/app/getComments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
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

export const deletePost = async(id) => {
  const response = await fetch('http://localhost:4000/app/deletePost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({postId: id})
  });
  return decoder(response)
}

export const deleteComment = async(id) => {
  const response = await fetch('http://localhost:4000/app/deleteComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({commentId: id})
  });
  return decoder(response)
}
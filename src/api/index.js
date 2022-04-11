const decoder = async(response) => {
  if(response.ok){
    const reader = response.body.getReader();
    const {value} = await reader.read();
    let result = new TextDecoder("utf-8").decode(value);
    return JSON.parse(result)
  }
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

export const editPost = async(id, text, likes) => {
  const response = await fetch('http://localhost:4000/app/updatePost', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      postId: id, 
      text,
      likes
    })
  });
  return response
}

export const deletePost = async(id) => {
  const response = await fetch('http://localhost:4000/app/deletePost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({postId: id})
  });
  return response
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

export const editComment = async(id, text, likes) => {
  const response = await fetch('http://localhost:4000/app/updateComment', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      commentId: id, 
      text,
      likes
    })
  });
  return response
}

export const deleteComment = async(id) => {
  const response = await fetch('http://localhost:4000/app/deleteComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({commentId: id})
  });
  return response
}

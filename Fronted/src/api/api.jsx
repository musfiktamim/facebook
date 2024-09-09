import axios from "axios";

const url = "http://localhost:8000";

const usertoken = localStorage.getItem("usertoken");

export async function createUser(data){
  try{
    const res = await axios.post(`${url}/signup`,data)
    return res.data;
  }catch(err){
    console.log(err.message)
  };
};

export async function logedin(data){
  try {
    const res = await axios.post(`${url}/login`,data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  };
};

export async function people(){
  const res = await axios.get(`${url}/people`,{
    headers: {
      authorization: usertoken
    }
  });
  return res.data;
};


export async function send_reqs(datas){
  const res = await axios.post(`${url}/send_req`,{
    data:datas
  },{
    headers:{
      Authorization: usertoken
    }
  });
  return res.data;
};

export async function req_cons(datas){
  const res = await axios.post(`${url}/req_con`,{
    data:datas
  },{
    headers:{
      Authorization: usertoken
    }
  });
  return res.data;
};

export async function unfriend_reqs(datas){
  const res = await axios.post(`${url}/unfriend_req`,{
    data:datas
  },{
    headers:{
      Authorization: usertoken
    }
  });
  return res.data;
};

export async function delete_reqs(datas){
  const res = await axios.post(`${url}/delete_req`,{data:datas},{headers:{Authorization: usertoken}})
  return res.data;
};


export async function cencel_req(datas){
  const res = await axios.post(`${url}/cencel_req`,{data:datas},{headers:{Authorization: usertoken}});
  return res.data;
};

export async function post_reqs(datas){
  const res = await axios.post(`${url}/postPost`,datas,{headers:{Authorization: usertoken}});
  return res.data;
};

export async function getPostForUser(){
  const res = await axios.post(`${url}/getpostforuser`,"my",{headers:{Authorization:usertoken}});
  return res.data;
}

export async function getAllPost(){
  const res = await axios.post(`${url}/getallpost`,"my",{headers:{Authorization:usertoken}});
  return res.data
}


export async function postMessages(data){
  const res = await axios.post(`${url}/postmessages`,{data:data},{headers:{Authorization: usertoken}});
  return res.data;
};

export async function LikeAdd(data){
  const res = await axios.post(`${url}/like/add`,data,{headers:{Authorization:usertoken}});
  return res.data;
}

export async function LikeRemove(data){
  const res = await axios.post(`${url}/like/remove`,data,{headers:{Authorization:usertoken}})
  return res.data;
}

export async function commentAdd(data){
  const res = await axios.post(`${url}/comment/add`,data,{headers:{Authorization:usertoken}});
  return res.data;
}


export async function getMessages(data){
  const res = await axios.post(`${url}/getmessages`,{data:data},{headers:{Authorization: usertoken}});
  return res.data;
};


export async function addconversation(data){
  const res = await axios.post(`${url}/conversation/add`,{data:data},{headers:{Authorization:usertoken}})
  return res.data
}

export async function addMessage(data){
  const res = await axios.post(`${url}/addmessage`,{data : data},{headers :{Authorization:usertoken}})
  return res.data;
} 


export async function getMessage(data){
  const res = await axios.post(`${url}/getmessage`,{data:data},{headers:{Authorization:usertoken}})
  return res.data;
}
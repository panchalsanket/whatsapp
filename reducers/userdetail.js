let userdata= [], count = 0
export default function(state=userdata, action){
  switch (action.type) {
    case "adduser": return [
            ...state ,
            {
                id : count++, 
                name: action.payload.uname,
                password: action.payload.password,
                number : action.payload.number,
                img : action.payload.img
            }
        ]
    
 }
  return userdata;
}
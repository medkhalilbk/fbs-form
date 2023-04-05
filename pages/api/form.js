import axios from "axios"

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
  
      // Sends a HTTP bad request error code
      axios.post('https://sheet.best/api/sheets/049e7c3e-18a0-4ff3-b540-494bd3d20598' , body).then((res) => {
        console.log(res)
      })
      return res.redirect('/')
 
  
    // Found the name.
    // Sends a HTTP success code 
  }
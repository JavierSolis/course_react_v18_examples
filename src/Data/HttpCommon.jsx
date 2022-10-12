//import axios from "axios";
//"Content-type": "application/json"
export default (urlEndpoint,methodType="GET",param=null)=>
    fetch(
        urlEndpoint, {
            method: methodType,
            body: (param==null)?null:JSON.stringify(param)
        })
    .then((response) => {
        console.log(response)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        }
        return response.json();
    })
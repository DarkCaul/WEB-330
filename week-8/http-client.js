export class httpClient {
    constructor(options) {
    async function get(url, params) {
        url = new URL(url);
        params = "";
        
   
  

  
    const res = await fetch(url.toString(),{
        method: "GET",
    });
}}};
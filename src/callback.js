const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchAPI(url, callback){
  var req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onreadystatechange = (event) => {
    if(req.readyState === 4){
      if(req.status === 200){
        callback(null, JSON.parse(req.responseText))
      }else{
        const err = new Error(`URL inválida ${url}`)
        return callback(err, null)
      }
    }
  }
  req.send()
}

module.exports = fetchAPI
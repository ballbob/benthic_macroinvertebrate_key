class Ajax{

  get(url,onceFetched){

    const request = new XMLHttpRequest()
    request.withCredentials = true
    request.open("GET",url)
    request.onload = () => {
      console.log("Ajax.get() has fetched the data.")
      // console.log(request.response)
      onceFetched(null,JSON.parse(request.response))
    }

    request.onerror = () => {
      console.log("Error fetching the data with Ajax.get()")
    }

    request.send()

  }

}

export default Ajax
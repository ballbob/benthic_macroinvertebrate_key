class Ajax {

  get(url,whenFetched){
    const request = new XMLHttpRequest()
    request.withCredentials = true
    request.open("GET",url)

    request.onload = () => {
      console.log("Ajax.get() has fetched the data.")
      whenFetched(null,JSON.parse(request.response),request.status)
    }

    request.onerror = () => {
      console.log("Error fetching the data with Ajax.get()")
    }

    request.send()

  }

}

export default Ajax
class Ajax{

  get(url,onceFetched){

    const request = new XMLHttpRequest()
    request.open("GET",url)
    request.onload = () => {
      onceFetched(null,JSON.parse(request.response))
    }

    request.onerror = () => {
      onceFetched(request.response)
    }

    request.send()

  }

}

export default Ajax
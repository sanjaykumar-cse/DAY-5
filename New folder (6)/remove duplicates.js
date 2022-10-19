function removeDuplicates(arr) {
    var clean = []
    var cleanLen = 0
    var arrLen = arr.length
  
    for (var i = 0; i < arrLen; i++) {
      var el = arr[i]
      var duplicate = false
  
      for (var j = 0; j < cleanLen; j++) {
        if (el !== clean[j]) continue
        duplicate = true
        break
      }
  
      if (duplicate) continue
      clean[cleanLen++] = el
    }
  
    return clean
  }
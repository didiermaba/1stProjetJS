function initEx() {

    let arrayIn = ['Paris', 'Lyon', 'Marseille', 'Lille', 'Bordeaux']
  
    console.log(arrayIn)
  
    // let arrayOut = [`<option value="selectionnez">Sélectionnez</option>'`]
  
    let arrayOut = arrayIn.map((item) => {
  
      return "<option value='" + item + "'>" + item + '</option>'
  
    })
  
    console.log(arrayOut)
  
    document.getElementById('villes').innerHTML = arrayOut
  
  }
  
  
  
  window.onload = initEx
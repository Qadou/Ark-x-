function matrixAddition(a, b){
    let somme =[]
    for(var i = 0; i <a.length; i++){
        somme[i]=[]
      for(var j = 0; j < b.length; j++){
            somme[i][j]=a[i][j]+b[i][j];
        }
    }
    return somme;

  }
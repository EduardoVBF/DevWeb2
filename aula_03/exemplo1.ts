namespace exemplo1 {
    let num: number = 18;
    let i: number = 0;
    // do while
    do {
        //console.log("Entrou no Do While")
        console.log(i); 
        i++;//i = i+1
        num = i == 11 ? 19 : 18
    } while (num <= 18);

    //While
    while(num <= 20) {
        console.log("Entrou no while");
        i++
    }

    //For
    for(i = 0; i <=10; i++) {
        console.log(i);
    }
}
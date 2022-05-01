function y(){

    for(var i=1;i<6;i++){ //var i 
    setTimeout(() => console.log(i ), i * 1000) //i is pointing the reference of i not value
    }
    console.log('Done Coding')    
    }
    // y();
    //we got 6 five times because i is referring to the same var i due to closure.
    

    //solution using let
    function y(){

        for(let i=1;i<6;i++){ //let i is get new address each time loop runs
        setTimeout(() => console.log(i ), i * 1000) //i is pointing the reference of i not value
        }
        console.log('Done Coding')    
        }
        // y();


        //solution using function
        function y(){
            for(var i=1;i<6;i++){ //var i 
                function close(x){ //each time the loop runs x is defined with new address
                    setTimeout(() => console.log(x), x * 1000) //x is pointing the reference of i not value
                }
                close(i)
            }
            console.log('Done Coding')    
            }
            y();
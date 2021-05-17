function callfunction(){
    var n1 = parseInt(document.getElementById("n1").value) ;
    var n2 = parseInt(document.getElementById("n2").value) ;
    var option = document.getElementById("opt").value ;
    var result = document.getElementById("res") ;
    switch(option)
    {
        case '*' : result.innerHTML = n1 * n2 ;
                   break ;
        case '/' : result.innerHTML = n1 / n2 ;
                   break ;
        case '+' : var x = n1 + n2 ;
                   result.innerHTML = x ;
                   break ;
        case '-' : result.innerHTML = n1 - n2 ;
                   break ;
        case '%' : result.innerHTML = n1 % n2 ;
                   break ;                      
    }

}
function compute()
    {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("result").innerText ="";
        document.getElementById("principal").focus();
    }
    else{
        var documentFragment = document.createDocumentFragment();
        var para1 = document.createElement("p");                 
        para1.innerHTML = "\n \nIf you deposit "+"<mark>"+principal+"</mark>,"; 

        var para2 = document.createElement("p");                 
        para2.innerHTML = "at an interest rate of "+"<mark>"+rate+"%</mark>,"; 

        var para3 = document.createElement("p");                 
        para3.innerHTML = "You will receive an amount of "+"<mark>"+interest+"</mark>,"; 
        
        var para4 = document.createElement("p");                 
        para4.innerHTML = "in the year "+"<mark>"+year+"</mark>";     

        documentFragment.appendChild(para1);
        documentFragment.appendChild(para2);
        documentFragment.appendChild(para3);
        documentFragment.appendChild(para4);

        document.getElementById("result").appendChild(documentFragment);

    }
    }

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function highlight(tex) {
    var result = text.replace(tex, `<mark>${tex}</mark>`);
    return result;
}
 

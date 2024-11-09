function calculate(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let solution = document.getElementById('solution');
    let answer;

    if (a == "" && b == "" && c == ""){
        alert("Please fill 2 sides");
    }
    else if (a == ""){
        if(b == "" || c ==""){
            alert("Please fill 2 sides");
        }else{
            solution.innerHTML = "Solving for a <br>";
            solution.innerHTML += "a<sup>2</sup>+b<sup>2</sup> = c<sup>2</sup> <br>";
            solution.innerHTML += "a<sup>2</sup>+"+b+"<sup>2</sup> = "+c+"<sup>2</sup> <br>";
            solution.innerHTML += "a<sup>2</sup>+"+b*b+" = "+c*c+"<br>";
            solution.innerHTML += "a<sup>2</sup> = "+c*c+"-"+b*b+"<br>";
            let sol = c*c - b*b;
            solution.innerHTML += "a<sup>2</sup> = "+sol+"<br>";
            solution.innerHTML += "a = √"+sol+"<br>";
            solution.innerHTML += "a = "+Math.sqrt(sol)+"<br>";
            answer = Math.sqrt(sol);
            document.getElementById('a').value = answer;
        }
    }else if (b == ""){
        if(a == "" || c==""){
            alert("Please fill 2 sides");
        }else{
            solution.innerHTML = "Solving for b <br>";
            solution.innerHTML += "a<sup>2</sup>+b<sup>2</sup> = c<sup>2</sup> <br>";
            solution.innerHTML += a+"<sup>2</sup>+b<sup>2</sup> = "+c+"<sup>2</sup> <br>";
            solution.innerHTML += a*a+"+b<sup>2</sup> = "+c*c+"<br>";
            solution.innerHTML += "b<sup>2</sup> = "+c*c+"-"+a*a+"<br>";
            let sol = c*c - a*a;
            solution.innerHTML += "b<sup>2</sup> = "+sol+"<br>";
            solution.innerHTML += "b = √"+sol+"<br>";
            solution.innerHTML += "b = "+Math.sqrt(sol)+"<br>";
            answer = Math.sqrt(sol);
            document.getElementById('b').value = answer;
        }
    }else if (c == ""){
        if(a == "" || b==""){
            alert("Please fill 2 sides");
        }else{
            solution.innerHTML = "Solving for c <br>";
            solution.innerHTML += "a<sup>2</sup>+b<sup>2</sup> = c<sup>2</sup> <br>";
            solution.innerHTML += a+"<sup>2</sup>+"+b+"<sup>2</sup> = c<sup>2</sup> <br>";
            solution.innerHTML += a*a+"+"+b*b+" = c<sup>2</sup> <br>";
            let sol = a*a + b*b;
            solution.innerHTML += sol+" = c<sup>2</sup> <br>";
            solution.innerHTML += "√"+sol+" = c <br>";
            solution.innerHTML += Math.sqrt(sol)+" = c <br>";
            solution.innerHTML += "c = "+Math.sqrt(sol)+"<br>";
            answer = Math.sqrt(sol);
            document.getElementById('c').value = answer;
        }
    }else{
        alert("Please leave one side empty");
    }
}
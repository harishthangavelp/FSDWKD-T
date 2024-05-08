var sumQns = [
    {
        qn: "divide 4567 + 3",
        opt: [200, 156, 1522.33, 1533],
        sol: "1522.33",
    },
    {
        qn: "divide 4 - 3",
        opt: [200, 156, 1, 1533],
        sol: "1",
    },
    {
        qn: "divide 40 * 3",
        opt: [120, 156, 150, 43],
        sol: "120",
    }
    ];
    
    var myScore = 0;
    var no = 1;
    for(var i = 0; i < sumQns.length; i++){
        for(no = 1;no <= sumQns.length; no++){
        var userAns = prompt(no + ") " +sumQns[i].qn);
        if(userAns === sumQns[i].sol){
            myScore++;
        }
    }
    }
    alert("Your score is " + myScore + "/" +sumQns.length);
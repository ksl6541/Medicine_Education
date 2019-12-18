function check() {
    var correct=[];
    var wrong=[];
    var correct_num = 0;
    var wrong_num = 0;
    
    var tmp = document.getElementsByName("A1")[0].value;
    if(tmp=="chemical"||tmp=="Chemical"){
        correct.push("Q1");
        correct_num = correct_num+1;
    }
    else{
        wrong.push("Q1");
        wrong_num = wrong_num+1;
    }
    if(Q2.A2[3].checked==true){
        correct.push("Q2");
        correct_num = correct_num+1;
    }
    else{
        wrong.push("Q2");
        wrong_num = wrong_num+1;
    }
    var tmp = document.getElementsByName("A3")[0].value;
    if((tmp=="Distribution")||(tmp=="distribution")){
        correct.push("Q3");
        correct_num = correct_num+1;
    }
    else{
        wrong.push("Q3");
        wrong_num = wrong_num+1;
    }
    if(Q4.A4[0].checked==true){
        correct.push("Q4");
        correct_num = correct_num+1;
    }
    else{
        wrong.push("Q4");
        wrong_num = wrong_num+1;
    }
    if(Q5.A5[1].checked==true){
        correct.push("Q5");
        correct_num = correct_num+1;
    }
    else{
        wrong.push("Q5");
        wrong_num = wrong_num+1;
    }
    alert("Your score is "+correct_num+"/5\nCorrect : "+correct+"\nWrong : "+wrong);
}
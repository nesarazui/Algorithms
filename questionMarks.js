function QuestionsMarks(str) {

    // code goes here  
    let left = 0
    let right = 0
    let questionCounter = 0
    let numberOfTrueAnswers = 0
  
    while (right < str.length){
      if (str[right] === '?'){
        questionCounter++
      }
      if (Number(str[right])){
        if (Number(str[left]) + Number(str[right]) === 10 && questionCounter !== 3 ){
          return false;
        }else if(Number(str[left]) + Number(str[right]) === 10 && questionCounter === 3){
          numberOfTrueAnswers++;
        }
        questionCounter=0;
        left = right;
      }
      right++;
    }
    return !!numberOfTrueAnswers
  }
  
  QuestionsMarks('acc?7??sss?3rr1??????5')
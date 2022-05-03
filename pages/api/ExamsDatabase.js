import db from '../../util/database';


export default async function handler(req, res) {
  try {
      /*let infoDatabase = await db.query("SELECT * From Tests t, Questions q WHERE t.testCode = q.testCode");
      console.log("*** ROWS FROM DATABASE ***");
      console.log(infoDatabase.rows);*/   

      let testData = await db.query("SELECT * From Tests");
      //console.log(testData.rows);  

      let quesitonData = await db.query("SELECT * From Questions");
      //console.log(quesitonData.rows);  

      let tests = [];
      
      //console.log("***** INFO ****");
      for (let i = 0; i < testData.rows.length; i++) {

        let test = {
          title:"",
          description:"",
          code: "",
          questions: []
        }

        test.title = testData.rows[i].title;
        test.description = testData.rows[i].description;
        test.code =  testData.rows[i].testcode;
        //console.log("ITERATED");
        
        let j = 0;
        while(j < quesitonData.rows.length){
          if(testData.rows[i].testcode == quesitonData.rows[j].testcode){
            //console.log(j);
            let question = {
              questionCode: "",
              questionStatement: "",
              testCode: "",
              option1: "",
              option2: "",
              option3: "",
              option4: "",
              correctAnswer: ""
            }
  
            
            //console.log("TEST: "+testData.rows[i].testcode + " *** QUESTION: "+ quesitonData.rows[j].testcode);
            question.questionCode = quesitonData.rows[j].questioncode;
            question.questionStatement = quesitonData.rows[j].questionstatement;
            question.testCode = quesitonData.rows[j].testcode;
            question.option1 = quesitonData.rows[j].option1;
            question.option2 = quesitonData.rows[j].option2;
            question.option3 = quesitonData.rows[j].option3;
            question.option4 = quesitonData.rows[j].option4;
            question.correctAnswer = quesitonData.rows[j].correctanswer;
            test.questions.push(question);
            //console.log(question);
          }
          j++;
        }

        tests.push(test);
        //console.log(test);
      }
      //console.log(tests);

      res.status(500).send({ response: tests });
  } catch (error) {
      res.status(500).send({ response: "Oops, something went wrong!" })
  }
}
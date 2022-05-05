import ExamCard from "./ExamCard";

export default function ExamList({tests}){
  return(
    <div >
      <ul>
        {tests.map((test)=>(
          <div key={test.code} >
            <ExamCard {...test} />
          </div>
        ))}
      </ul>
      <br/>
    </div>
  )
}
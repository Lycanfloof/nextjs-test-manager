import ExamCard from "./ExamCard";

export default function ExamList({tests}){
  return(
    <div>
      <ul>
        {tests.map((test)=>(
          <li key={test.code}>
            <ExamCard {...test} />
          </li>
        ))}
      </ul>
    </div>
  )
}
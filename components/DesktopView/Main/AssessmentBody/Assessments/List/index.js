import AssessmentCard from './AssessmentCard'

const List = () =>{
    return [1,2,3].map((item) => <AssessmentCard key={item} item={item} />)
}

export default List
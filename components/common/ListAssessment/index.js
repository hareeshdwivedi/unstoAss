import AssessmentCard from './AssessmentCard'

const List = () =>{
    return [...Array(5)].map((item) => <AssessmentCard key={item} item={item} />)
}

export default List
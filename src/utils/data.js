import coding from '../images/preparation.png'
import fullStack from '../images/fullStack.png'
import AI from '../images/ai.png'
import sd from '../images/sd.png'

export const homeCourseData =[
    {id:1, name:"Programming", desc:'Data Structure & Algorithm', imageSrc:coding,link:'./python'},
    {id:2, name:"Full-Stack ", desc:'Front-end & Backend', imageSrc:fullStack,link:'./ml'},
    {id:4, name:"System Design ", desc:'Data science, Machine Learning ', imageSrc:sd,link:'./ml'},
    {id:4, name:"AI ", desc:'Data science, Machine Learning ', imageSrc:AI ,link:'./ml'},
]



export const topicIndex=[
    {
        "dsa":1,
        python:0,
        preparation:2
    }
]

export const getIndex = (subject ) =>{
    switch(subject){
        case "problems":
            return 2
        case "python":
            return 0
    }
}

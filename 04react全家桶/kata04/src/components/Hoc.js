import React from 'react'

function Lesson(props) {
    return (
        <div>
            { props.stage} - {props.title}
        </div>
    )
}

// 模拟数据
const lessons = [
    { stage: "React", title: "核心API" },
    { stage: "React", title: "组件化1" },
    { stage: "React", title: "组件化2" }
]

const withContent = Comp => props => {
    const content = lessons[props.idx]
    return <Comp { ...content }></Comp>
}

// const LessonWithContent = withContent(Lesson)

// 链式调用
// 高阶组件withLog负责包装传入组件Comp
// 包装后组件在挂载时可以输出日志记录
const withLog = Comp => {
    // 返回组件需要生命周期，因此声明为class组件
    return class extends React.Component {
        render() {
            return <Comp { ...this.props }/>
        }
        componentDidMount() {
            console.log('didMount ', this.props)
        }
    }
}

const LessonWithContentAndLog = withLog(withContent(Lesson))

export default function HocTest() {
    return (
        <div>
            { [0,0,0].map((item, idx) => {
                return <LessonWithContentAndLog idx={ idx } key={ idx }></LessonWithContentAndLog>
            })}
        </div>
    )
}
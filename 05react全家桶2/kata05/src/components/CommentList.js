import React, { Component } from 'react'

export default class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
        setInterval(() => {
            this.setState({
                comments: [
                  { body: "react is very good", author: "facebook" },
                  { body: "vue is very good", author: "youyuxi" }
                ]
            })
        }, 1000)
    }
    
    render() {
        return(
            <div>
                {this.state.comments.map((c, i) => (
                    <Comment key={i} data={c} />
                ))}
            </div>
        )
    }
}

class Comment extends Component {
    shouldComponentUpdate({ data: {body, author}}) {
        if (body === this.props.data.body && author === this.props.data.author) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <p>{ this.props.data.body }</p>
                <p>{ this.props.data.author }</p>
            </div>
        )
    }
}

// const Comment = React.memo(function({ body, author }) {  
//     return (
//       <div>
//         <p>{body}</p>
//         <p> --- {author}</p>
//       </div>
//     )
//   })
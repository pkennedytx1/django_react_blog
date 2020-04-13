import React from 'react'
import axios from 'axios'
import Articles from '../components/Article'
import { Card } from 'antd'

class ArticleDetail extends React.Component {

    state = {
        articles: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
    }

    render() {
        return(
            <Card title={this.state.articles.title}>
                <p>{this.state.articles.content}</p>
            </Card>
        )
    }
}

export default ArticleDetail
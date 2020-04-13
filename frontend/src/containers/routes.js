import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from './ArticleListView'
import ArticleDetail from './ArticleDetail'

const BaseRouter = () => {
    return(
        <div>
            <Route exact path='/' component={ArticleList}/>
            <Route exact path='/:articleID' component={ArticleDetail} />
        </div>
    ) 
}

export default BaseRouter

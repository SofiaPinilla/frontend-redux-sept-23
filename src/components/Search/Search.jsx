import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostByTitle } from '../../features/posts/postsSlice'
import Post from '../Post/Post'

const Search = () => {
    const {search} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPostByTitle(search))
    },[search])

    return (
    <div><Post/></div>
  )
}

export default Search
import React, {useState, useEffect} from 'react';
export default function GitHubDemo(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/LudwigSvensson/repos')
        .then(response=>response.json())
        .then(data=>setPosts(data))
        .catch(error=>console.error('Kunde inte läsa data',error));
    },[]);
    return(
        <div className='project'>
            <h1>My public projects from GitHub</h1>
            <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>
                            <h3>{post.name}</h3>
                            <h4>{post.description}</h4>
                            <a className="buttonbox" href={post.html_url} target="_blank" rel="noopener noreferrer">Open project</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
} 
import React, { useEffect } from 'react'
import {Container , Postcart} from "../components"
import appwriteService from '../appwrite/configg'

function Allposts() {
 const [posts,setPosts] = React.useState([])
 useEffect(()=>{},[])
 
 appwriteService.getPosts([]).then((posts)=>{
    if(posts){
        setPosts(posts.documents)
        
        
    }
})



 return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) =>{ 
                    console.log(post);
                    (
                    
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcart {...post} />
                    </div>
                )})}
            </div>
            </Container>
    </div>
  )
}

export default Allposts;

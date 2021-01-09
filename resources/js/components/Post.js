import { divide, set } from 'lodash';
import React, { useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

function Post ()
{
	const [ posts, setPosts ] = useState( [] );
	const url = 'https://jsonplaceholder.typicode.com/posts'
	axios.get( url )
		.then( function ( response )
		{
			setPosts( response.data );
		} ).catch( function ( error )
		{
			console.log( error );
		} )

	return (
		<main className="container-fluid py-4">
			<div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
				<div className="col-md-6 px-0">
					<h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
					<p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
					<p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
				</div>
			</div>

			<div className="row px-0">
				{ posts.map( post => (
					<PostItem post={ post } key={ post.id } />
				) ) }
			</div>
		</main>
	)
}

export default Post
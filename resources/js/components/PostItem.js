import React from 'react';


export default function PostItem ( { post } )
{
	return (
		<div className="col-md-6">
			<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 mx-0 shadow-sm h-md-250 position-relative">
				<div className="col p-4 d-flex flex-column position-static">
					<strong className="d-inline-block mb-2 text-primary">World</strong>
					<h3 className="mb-0">{ post.title }</h3>
					<div className="mb-1 text-muted">Nov 12</div>
					<p className="card-text mb-auto">{ post.body }</p>
					<a href="#" className="stretched-link">Continue reading</a>
				</div>

			</div>
		</div>
	)
}
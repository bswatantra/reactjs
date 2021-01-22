import React from 'react';
import Form from '../utils/Form';

function PostModal ()
{
	const post = () =>
	{
		axios.post( '/api/posts', values )
			.then( function ( values )
			{
				console.log( values.data );
			} );
		// console.log( values );
	}
	const [ values, handleChange, handleSubmit ] = Form( post );

	return (
		<div>
			<button type="button" className="btn btn-dark mb-3 " data-toggle="modal" data-target="#post">
				Add Post
			</button>


			<div className="modal fade" id="post" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="postLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="postLabel">Add Post</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form onSubmit={ handleSubmit }>
								<div class="form-group">
									<label for="title">Title</label>
									<input type="text" name="title" class="form-control"
										id="title" placeholder="Tile"
										value={ values.title || "" }
										onChange={ handleChange }
									/>
								</div>

								<div class="form-group">
									<label for="body">Body</label>
									<textarea class="form-control"
										id="body" name="body" rows="3"
										value={ values.body || "" }
										onChange={ handleChange }
									/>
								</div>
								<button type="submit" className="btn btn-dark float-right">Submit</button>
							</form>
						</div>
						{/* <div className="modal-footer">
							<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostModal;

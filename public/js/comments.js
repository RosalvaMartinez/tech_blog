const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();


    if (comment) {
        const post_id = document.URL.split('/').at(-1);
        //send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(document.URL);
        } else {
            alert('Failed to create comment');
        }
    }
}
    
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then (data => displayComment(data))
}

function displayComment(comments){
    console.log(comments)
    const commentContainer = document.getElementById('comment-container')
    commentContainer.innerText = '';
    for(const comment of comments){
        const commentDiv = document.createElement('div') 
        commentDiv.innerHTML = `<h3>Email:comment.email,h3/>
        `
        commentContainer.appendChild(commentDiv)
    }

}
loadComment()
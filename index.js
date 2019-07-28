function createPost(){
  let title = document.getElementById('postTitle').value;
  let content = document.getElementById('postContent').value;
  let author = document.getElementById('postAuthor').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let postFn = _.template(postTemplate);

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageFn = _.template(pageTemplate)

  let post = postFn({'title': title, 'content': content, 'author': author});
  let page = pageFn({'post': post})

  let main = document.querySelector('main');
  main.innerHTML += page;

  let comments = document.querySelector('comments-template');
  main.innerHTML += comments;

}

function postComment(){
  let commenterName = document.getElementById('commenterName').value;
  let commentBody = document.getElementById('commentBody').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let commentFn = _.template(commentTemplate);

  let commentsDiv = document.querySelector('comment');
  let templateHTML = commentFn({'commentBody': commentBody, 'commenterName': commenterName,});

  commentsDiv.innerHTML += templateHTML;
}

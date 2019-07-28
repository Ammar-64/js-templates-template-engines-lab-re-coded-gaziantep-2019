function createPost(){
  let title = document.getElementById('postTitle').value;
  let content = document.getElementById('postContent').value;
  let auther = document.getElementById('postAuthor').value;

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

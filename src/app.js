import './app.scss';
import $ from 'jquery';
import { http } from './http';
import { ui } from './ui';

console.log('document loaded...');

$(document).ready(function(){
    // Get posts on DOM load
    getPosts();

    // Listen for add post
    ui.postSubmit.on('click', submitPost);

    // Listen for delete post
    ui.post.on('click', deletePost);

    // Get Posts
    function getPosts() {
        http.get('http://localhost:3000/posts')
            .then(data => ui.showPost(data))
            .catch(err => console.log(err));
    }

    // Submit Post
    function submitPost() {
        const title = ui.titleInput.val(),
              body = ui.bodyInput.val();

        const data = {
            title : title,
            body: body
        }

        // Create Post
        http.post('http://localhost:3000/posts', data)
            .then(data => {
                ui.showAlert('Post added', 'alert alert-success');
                ui.clearFields();
                getPosts();
            })
            .catch(err => console.log(err));  

    }

    // Submit Delete
    function deletePost(e) {
        e.preventDefault();

        if($(e.target).hasClass('delete-item')){
           
            const id = $(e.target).parent().attr('data-id');
            if(confirm('Are you sure?')){
                http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post Removed', 'alert alert-success');
                    getPosts();
                })
                .catch(err => console.log(err));
            }
        }
    }
});


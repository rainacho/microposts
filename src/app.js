import $ from 'jquery';
import { http } from './http';
import { ui } from './ui';

console.log('document loaded...');

$(document).ready(function(){
    // Get posts on DOM load
    getPosts();

    function getPosts() {
        http.get('http://localhost:3000/post')
            .then(data => ui.showPost(data))
            .catch(err => console.log(err));
    }
});


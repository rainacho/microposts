import $ from 'jquery';

class UI {
    constructor() {
        this.post = $('#posts');
        this.titleInput = $('#title');
        this.bodyInput = $('#body');
        this.idInput = $('#id');
        this.postSubmit = $('.post-submit');
        this.forState = 'add';
    }

    showPost(posts) {
        let output = '';

        $.each(posts, (i, post)=> {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });

        this.post.html(output);
    }

    showAlert(message, className) {
        this.clearFields();

        // Insert alert div
        $(`<div class="${className}">${message}</div>`).insertBefore('#posts');
   
        // Timeout
        setTimeout(() => {
            this.clearAlert()
        }, 3000); 
    }

    clearAlert(){
        const currentAlert = $('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.val('');
        this.bodyInput.val('');
    }
}

export const ui = new UI();
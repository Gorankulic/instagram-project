document.addEventListener('DOMContentLoaded', (event) => {
    const usersData = [{
            "name": "Goran",
            "comments": ["Great photo!", "Love it!", "So beautiful!"],
            "likes": 10,
            "picture-location": "img/posts/post (1).jpg",
            "profile-picture": "img/people profile pictures/pic (1).jpg",
            "status": "Enjoying life to the fullest!"
        },
        {
            "name": "Rob",
            "comments": ["Amazing!", "Awesome shot!", "You're killing it!"],
            "likes": 5,
            "picture-location": "img/posts/post (2).jpg",
            "profile-picture": "img/people profile pictures/pic (2).jpg",
            "status": "Chasing dreams and making memories!"
        },
        {
            "name": "Tom und Anna",
            "comments": ["Fantastic!", "Incredible work!", "You never disappoint!"],
            "likes": 8,
            "picture-location": "img/posts/post (3).jpg",
            "profile-picture": "img/people profile pictures/pic (3).jpg",
            "status": "Embracing the beauty of nature!"
        },
        {
            "name": "Birgit",
            "comments": ["This is stunning!", "Absolutely love it!", "You're a talent!"],
            "likes": 3,
            "picture-location": "img/posts/post (4).jpg",
            "profile-picture": "img/people profile pictures/pic (4).jpg",
            "status": "Exploring new horizons!"
        }
    ]

    /**
     * Creates an HTML element with the given tag name, attributes, and inner text.
     * @param {string} tagName - The name of the tag for the HTML element.
     * @param {Object} attributes - An object mapping attribute names to attribute values.
     * @param {string} [innerText] - Optional. The inner text of the HTML element.
     * @return {HTMLElement} The created HTML element.
     */
    function createElement(tagName, attributes, innerText) {
        const element = document.createElement(tagName);

        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }

        if (innerText) {
            element.innerText = innerText;
        }

        return element;
    }

    /**
     * This function will populate the page with data for each user.
     */
    function populatePageWithData() {
        const container = document.getElementById('all-user-posts-and-pictures');

        for (let i = 0; i < usersData.length; i++) {
            const user = usersData[i];

            // User-picture-and-name
            const userDiv = createElement('div', { class: 'user-picture-and-name' });
            const userNameP = createElement('p', { id: 'name-of-the-user' }, user.name);
            const userPhotoImg = createElement('img', {
                id: 'icon-of-the-user',
                class: 'user-photo-on-status',
                src: user['profile-picture'],
                alt: 'User Profile'
            });

            userDiv.appendChild(userNameP);
            userDiv.appendChild(userPhotoImg);
            container.appendChild(userDiv);

            // Post-container-with-additional-buttons-and-comments
            const postContainerDiv = createElement('div', {
                id: 'post-container-with-additional-buttons-and-comments',
                class: 'picture-container'
            });
            const postImage = createElement('img', {
                src: user['picture-location'],
                alt: 'User Post'
            });

            postContainerDiv.appendChild(postImage);
            container.appendChild(postContainerDiv);

            // Buttons-container
            const buttonsContainerDiv = createElement('div', { class: 'buttons-container' });

            // ... Create and append the inner elements like icons-container, favorite-container

            container.appendChild(buttonsContainerDiv);

            // Likes
            const likesDiv = createElement('div', { class: 'likes' });
            const likesP = createElement('p');
            likesP.innerHTML = `Liked by <b>Username</b> and <b id="names-of-the-other-users-who-liked-the-post">others</b>`;

            likesDiv.appendChild(likesP);
            container.appendChild(likesDiv);

            // Status
            const statusDiv = createElement('div', { class: 'status' });
            const statusUsernameP = createElement('p');
            statusUsernameP.innerHTML = `<b>${user.name}</b>`;
            const statusContentP = createElement('p', { id: 'user-status' }, user.status);

            statusDiv.appendChild(statusUsernameP);
            statusDiv.appendChild(statusContentP);
            container.appendChild(statusDiv);

            // View all comments
            const commentsDiv = createElement('div');
            const commentsP = createElement('p', {}, 'View all comments');

            commentsDiv.appendChild(commentsP);
            container.appendChild(commentsDiv);

            // Input for new comments
            const commentInput = createElement('input', {
                type: 'text',
                name: 'comment',
                placeholder: 'Add a comment...'
            });

            container.appendChild(commentInput);
        }
    }

    populatePageWithData();
});
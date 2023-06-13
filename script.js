// Event listener that waits for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Array containing user data
    const usersData = [
        // User 1
        [
            "Goran", // User name
            ["Great photo!", "Love it!", "So beautiful!"], // Array of user comments
            10, // Number of likes
            "img/posts/post (1).jpg", // Picture location
            "img/people profile pictures/pic (1).jpg", // Profile picture location
            "Enjoying life to the fullest!" // User status
        ],
        // User 2
        [
            "Rob", // User name
            ["Amazing!", "Awesome shot!", "You're killing it!"], // Array of user comments
            5, // Number of likes
            "img/posts/post (2).jpg", // Picture location
            "img/people profile pictures/pic (2).jpg", // Profile picture location
            "Chasing dreams and making memories!" // User status
        ],
        // User 3
        [
            "Tom und Anna", // User name
            ["Fantastic!", "Incredible work!", "You never disappoint!"], // Array of user comments
            8, // Number of likes
            "img/posts/post (3).jpg", // Picture location
            "img/people profile pictures/pic (3).jpg", // Profile picture location
            "Embracing the beauty of nature!" // User status
        ],
        // User 4
        [
            "Birgit", // User name
            ["This is stunning!", "Absolutely love it!", "You're a talent!"], // Array of user comments
            3, // Number of likes
            "img/posts/post (4).jpg", // Picture location
            "img/people profile pictures/pic (4).jpg", // Profile picture location
            "Exploring new horizons!" // User status
        ]
    ];

    /**
     * Creates an HTML element with the given tag name, attributes, and inner text.
     * @param {string} tagName - The name of the tag for the HTML element.
     * @param {Object} attributes - An object mapping attribute names to attribute values.
     * @param {string} [innerText] - Optional. The inner text of the HTML element.
     * @return {HTMLElement} The created HTML element.
     */
    function createElement(tagName, attributes, innerText) {
        const element = document.createElement(tagName);

        // Set the attributes of the HTML element
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }

        // Set the inner text of the HTML element if provided
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

        // Loop through each user data
        for (let i = 0; i < usersData.length; i++) {
            const user = usersData[i];

            // User-picture-and-name
            const userDiv = createElement('div', { class: 'user-picture-and-name' });

            // Create a paragraph element for the user name
            const userNameP = createElement('p', { id: 'name-of-the-user' }, user[0]); // User name

            // Create an image element for the user profile picture
            const userPhotoImg = createElement('img', {
                id: 'icon-of-the-user',
                class: 'user-photo-on-status',
                src: user[4], // Profile picture location
                alt: 'User Profile'
            });

            // Append the user name and profile picture elements to the user-div container
            userDiv.appendChild(userNameP);
            userDiv.appendChild(userPhotoImg);
            container.appendChild(userDiv);

            // Post-container-with-additional-buttons-and-comments
            const postContainerDiv = createElement('div', {
                id: 'post-container-with-additional-buttons-and-comments',
                class: 'picture-container'
            });

            // Create an image element for the user post picture
            const postImage = createElement('img', {
                src: user[3], // Picture location
                alt: 'User Post'
            });

            // Append the post image element to the post-container-div
            postContainerDiv.appendChild(postImage);
            container.appendChild(postContainerDiv);

            // Buttons-container
            const buttonsContainerDiv = createElement('div', {
                class: 'buttons-container',
                id: 'icons-container-parents'
            });

            // Icons-container
            const iconsContainerDiv = createElement('div', {
                class: 'icons-container',
                id: 'icons-container-kids'
            });

            // Like button
            const likeButtonImg = createElement('img', {
                src: 'img/icons/herz.png', // Like button image
                alt: 'Like Button'
            });

            // Append the like button image to the icons-container-div
            iconsContainerDiv.appendChild(likeButtonImg);

            // Comment section
            const commentSectionImg = createElement('img', {
                src: 'img/icons/comment icon.png', // Comment section image
                alt: 'Comment Section'
            });

            // Append the comment section image to the icons-container-div
            iconsContainerDiv.appendChild(commentSectionImg);

            // Arrow button
            const arrowButtonImg = createElement('img', {
                src: 'img/icons/arrow.png', // Arrow button image
                id: 'send-to-friends-arrow',
                class: 'arrow-button',
                alt: 'Arrow Button'
            });

            // Append the arrow button image to the icons-container-div
            iconsContainerDiv.appendChild(arrowButtonImg);

            // Append the icons-container-div to the buttons-container-div
            buttonsContainerDiv.appendChild(iconsContainerDiv);

            // Favorite container
            const favoriteContainerDiv = createElement('div', { class: 'favorite-container' });

            // Create an image element for the favorite icon
            const favoriteIconImg = createElement('img', {
                src: 'img/icons/favorite icon blank.png', // Favorite icon image
                id: 'add-to-favorite',
                alt: 'Favorite Icon'
            });

            // Append the favorite icon image to the favorite-container-div
            favoriteContainerDiv.appendChild(favoriteIconImg);
            buttonsContainerDiv.appendChild(favoriteContainerDiv);

            // Append the buttons-container-div to the container
            container.appendChild(buttonsContainerDiv);

            // Likes
            const likesDiv = createElement('div', { class: 'likes' });
            const likesP = createElement('p');

            // Set the inner HTML of the likes paragraph
            likesP.innerHTML = `Liked by <b>Username</b> and <b id="names-of-the-other-users-who-liked-the-post">others</b>`;

            // Append the likes paragraph to the container
            likesDiv.appendChild(likesP);
            container.appendChild(likesDiv);

            // Status
            const statusDiv = createElement('div', { class: 'status' });
            const statusUsernameP = createElement('p');

            // Set the inner HTML of the status username paragraph
            statusUsernameP.innerHTML = `<b>Username</b>`;

            // Create a paragraph element for the user status
            const statusContentP = createElement('p', { id: 'user-status' }, user[5]); // User status

            // Append the status username and status content elements to the status-div
            statusDiv.appendChild(statusUsernameP);
            statusDiv.appendChild(statusContentP);
            container.appendChild(statusDiv);

            // View all comments
            const commentsDiv = createElement('div');
            const commentsP = createElement('p', {}, 'View all comments');

            // Append the comments paragraph to the container
            commentsDiv.appendChild(commentsP);
            container.appendChild(commentsDiv);

            // Input for new comments
            const commentInput = createElement('input', {
                type: 'text',
                name: 'comment',
                placeholder: 'Add a comment...'
            });

            // Append the comment input to the container
            container.appendChild(commentInput);
        }
    }

    // Call the function to populate the page with user data
    populatePageWithData();
});
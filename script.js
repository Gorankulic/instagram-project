// Event listener that waits for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // JSON array containing user data
    const usersData = [{
            id: 1,
            userName: "Goran",
            comments: ["Great photo!", "Love it!", "So beautiful!"],
            likes: 10,
            postImage: "img/posts/post (1).jpg",
            profilePicture: "img/people profile pictures/pic (1).jpg",
            userStatus: "Enjoying life to the fullest!",
        },
        {
            id: 2,
            userName: "Rob",
            comments: ["Amazing!", "Awesome shot!", "You're killing it!"],
            likes: 5,
            postImage: "img/posts/post (2).jpg",
            profilePicture: "img/people profile pictures/pic (2).jpg",
            userStatus: "Chasing dreams and making memories!",
        },
        {
            id: 3,
            userName: "Tom und Anna",
            comments: ["Fantastic!", "Incredible work!", "You never disappoint!"],
            likes: 8,
            postImage: "img/posts/post (3).jpg",
            profilePicture: "img/people profile pictures/pic (3).jpg",
            userStatus: "Embracing the beauty of nature!",
        },
        {
            id: 4,
            userName: "Birgit",
            comments: ["This is stunning!", "Absolutely love it!", "You're a talent!"],
            likes: 3,
            postImage: "img/posts/post (4).jpg",
            profilePicture: "img/people profile pictures/pic (4).jpg",
            userStatus: "Exploring new horizons!",
        },
    ];

    /**
     * Populates the page with user data.
     */
    function populatePageWithData() {
        const container = document.getElementById("all-user-posts-and-pictures");

        // Loop through each user data
        for (let i = 0; i < usersData.length; i++) {
            const user = usersData[i];

            // Create a container div for each user
            const userContainerDiv = document.createElement("div");
            userContainerDiv.id = `user-container-${user.id}`;

            // User-picture-and-name
            let userDiv = `<div class="user-picture-and-name">
                                <p id="name-of-the-user-${user.id}">${user.userName}</p>
                                <img id="icon-of-the-user-${user.id}" class="user-photo-on-status" src="${user.profilePicture}" alt="User Profile">
                            </div>`;

            // Post-container-with-additional-buttons-and-comments
            let postContainerDiv = `<div id="post-container-with-additional-buttons-and-comments-${user.id}" class="picture-container">
                                        <img src="${user.postImage}" alt="User Post">
                                    </div>`;

            // Buttons-container
            let buttonsContainerDiv = `<div class="buttons-container" id="icons-container-parents-${user.id}">
                                            <div class="icons-container" id="icons-container-kids-${user.id}">
                                                <img src="img/icons/herz.png" alt="Like Button">
                                                <img src="img/icons/comment icon.png" alt="Comment Section">
                                                <img src="img/icons/arrow.png" id="send-to-friends-arrow-${user.id}" class="arrow-button" alt="Arrow Button">
                                            </div>
                                            <div class="favorite-container">
                                                <img src="img/icons/favorite icon blank.png" id="add-to-favorite-${user.id}" alt="Favorite Icon">
                                            </div>
                                        </div>`;

            // Likes
            let likesDiv = `<div class="likes">
                                Liked by <b>Username</b> and <b id="names-of-the-other-users-who-liked-the-post">others</b>
                            </div>`;

            // Status
            let statusDiv = `<div class="status">
                                <p><b>Username</b></p>
                                <p id="user-status-${user.id}">${user.userStatus}</p>
                            </div>`;

            // View all comments
            let viewAllCommentsDiv = `<div>
                                            <p id="view-all-comments">View all comments</p>
                                        </div>`;

            // Input for new comments
            let commentInput = `<input type="text" name="comment" placeholder="Add a comment...">`;

            // Set the innerHTML of userContainerDiv
            userContainerDiv.innerHTML = userDiv + postContainerDiv + buttonsContainerDiv + likesDiv + statusDiv + viewAllCommentsDiv + commentInput;

            // Append the user container div to the main container
            container.appendChild(userContainerDiv);
        }
    }

    // Call the function to populate the page with user data
    populatePageWithData();
});
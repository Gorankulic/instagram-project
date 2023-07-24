let usersData = [
    // User data objects
];

window.onload = function() {
        // JSON array containing user data
        usersData = [{
                "userName": "Goran",
                "comments": ["Great photo!", "Love it!", "So beautiful!"],
                "likes": 10,
                "postImage": "img/posts/post (1).jpg",
                "profilePicture": "img/people profile pictures/pic (1).jpg",
                "userStatus": "Enjoying life to the fullest!",
                "namesOfUsersWhoLikedThePost": ["Alex123", "Lily22", "MaxPower", "JazzQueen", "StarGazer", "DreamCatcher", "SunnySmiles", "Moonlighter", "WildHeart", "RainbowSparkle"]
            },
            {
                "userName": "Rob",
                "comments": ["Amazing!", "Awesome shot!", "You're killing it!"],
                "likes": 5,
                "postImage": "img/posts/post (2).jpg",
                "profilePicture": "img/people profile pictures/pic (2).jpg",
                "userStatus": "Chasing dreams and making memories!",
                "namesOfUsersWhoLikedThePost": ["Eclipse", "Stardust", "Nova", "Whisper", "Luna"]
            },
            {
                "userName": "Tom und Anna",
                "comments": ["Fantastic!", "Incredible work!", "You never disappoint!"],
                "likes": 8,
                "postImage": "img/posts/post (3).jpg",
                "profilePicture": "img/people profile pictures/pic (3).jpg",
                "userStatus": "Embracing the beauty of nature!",
                "namesOfUsersWhoLikedThePost": ["Sunshine", "Breeze", "NatureLover", "Adventurer", "Wanderlust"]
            },
            {
                "userName": "Birgit",
                "comments": ["This is stunning!", "Absolutely love it!", "You're a talent!"],
                "likes": 3,
                "postImage": "img/posts/post (4).jpg",
                "profilePicture": "img/people profile pictures/pic (4).jpg",
                "userStatus": "Exploring new horizons!",
                "namesOfUsersWhoLikedThePost": ["InspireMe", "Dreamer", "Explorer"]
            }
        ];



        /**
         * Populates the page with user data.
         */
        function populatePageWithData() {
            let container = document.getElementById("all-user-posts-and-pictures");

            // Loop through each user data
            for (let i = 0; i < usersData.length; i++) {
                let user = usersData[i];

                // Create a container div for each user
                let userContainerDiv = document.createElement("div");
                userContainerDiv.id = `user-container-${user.id}`;

                // User-picture-and-name
                let userDiv = `<div class="user-picture-and-name">
                                <p id="name-of-the-user-${user.id}">${user.userName}</p>
                                <img id="icon-of-the-user-${user.id}" class="user-photo-on-status" src="${user.profilePicture}" alt="User Profile">
                            </div>`;

                // Post-container-with-additional-buttons-and-comments
                let postContainerDiv = `<div id="post-container-with-additional-buttons-and-comments-${user.id}" class="picture-container">
                                        <img onclick="show()" src="${user.postImage}" alt="User Post">
                                    </div>`;

                // Buttons-container
                let buttonsContainerDiv = `<div class="buttons-container" >
                                            <div class="icons-container" >
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
Liked by <b>${user.namesOfUsersWhoLikedThePost.slice(0, 3).join(", ")}</b>${user.namesOfUsersWhoLikedThePost.length > 3 ? " and" : ""} ${user.namesOfUsersWhoLikedThePost.length > 3 ? `<b id="names-of-the-other-users-who-liked-the-post">${user.namesOfUsersWhoLikedThePost.length - 3} others</b>` : ""}
</div>`;



            // Status
            let statusDiv = `<div class="status">
                                <p><b>${user.userName}</b></p>
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
    

    /**
     * Displays user stories.
     */
    function showUserStories() {
        let userStoriesAndUserPicture = document.getElementById("stories");
        userStoriesAndUserPicture.innerHTML = '';

        for (let j = 0; j < usersData.length; j++) {
            let user = usersData[j];

            userStoriesAndUserPicture.innerHTML += `
                <div class="profile-story" id="story-from-profile-${user.id}">
                    <img src="${user.profilePicture}" alt="Profile Picture">
                    <p>${user.userName}</p>
                </div>
            `;
        }
    }

   
    // Call the function to populate the page with user data
    populatePageWithData();

    // Call the function to display user stories
    showUserStories();
};
 function closeDialog() {
    let postsInFullScreen = document.getElementById("postsInFullScreen");
    postsInFullScreen.classList.add("d-none");
 }

 
 function show() {
    // Display the full-screen post
    let postsInFullScreen = document.getElementById("postsInFullScreen");
    postsInFullScreen.classList.remove("d-none");

    // Get the clicked picture element
    let clickedPicture = event.target;

    // Get the source of the clicked picture
    let pictureSource = clickedPicture.src;

    // Find the matching user data based on the picture source
    let matchingUser = usersData.find((user) => user.postImage === pictureSource);

    // Set the source of the userImageBigMode element
    let userImageBigMode = document.getElementById("userImageBigMode");
    userImageBigMode.src = pictureSource;

    // Retrieve matching comments
    let matchingComments = matchingUser.comments;

    // Retrieve user name
    let userName = matchingUser.userName;

    // Retrieve user status
    let userStatus = matchingUser.userStatus;

    // Set the comments in the comment section
    let commentSection = document.getElementById("commentSection");
    commentSection.innerHTML = `
        <span onclick="closeDialog()" id="closeButton" class="close-button"><b>X</b></span>

        <div class="picture-and-text-post-of-the-user">
            <img id="peopleSmallPicture" class="people-small-profile-images" src="${matchingUser.profilePicture}" alt="User profile picture">
            <b id="userNameInPreviewMode">${userName}</b>
            <span id="userPostInPreviewMode" class="user-post">${userStatus}</span>
            <img id="heartImageInPreviewMode" class="heart-image-white" src="img/icons/herz.png" alt="">
        </div>

        <div class="reply-to-user-text">
            <span class="reply-text">6h</span>
            <span class="reply-text">${matchingUser.likes} likes</span>
            <span class="reply-text">Reply</span>
        </div>

        <ul id="commentList">
            ${matchingComments.map((comment) => `<li>${comment}</li>`).join("")}
        </ul>
    `;
}


  


// Add event listener to each post image
let postImages = document.querySelectorAll(".picture-container img");
postImages.forEach(function(image) {
    image.addEventListener("click", show);
});
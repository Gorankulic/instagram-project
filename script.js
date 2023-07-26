usersData = [{
        "userName": "Goran",
        "comments": [
            { "text": "Great photo!", "commentedBy": "Alex123", "commentAge": 5, "commenterImage": "img/people who commented/image (1).jpg" },
            { "text": "Love it!", "commentedBy": "Lily22", "commentAge": 2, "commenterImage": "img/people who commented/image (2).jpg" },
            { "text": "So beautiful!", "commentedBy": "MaxPower", "commentAge": 1, "commenterImage": "img/people who commented/image (3).jpg" }
        ],
        "likes": 10,
        "postImage": "img/posts/post (1).jpg",
        "profilePicture": "img/people profile pictures/pic (1).jpg",
        "userStatus": "Enjoying life to the fullest!",
        "namesOfUsersWhoLikedThePost": ["Alex123", "Lily22", "MaxPower", "JazzQueen", "StarGazer", "DreamCatcher", "SunnySmiles", "Moonlighter", "WildHeart", "RainbowSparkle"],
        "hoursOld": 6
    },
    {
        "userName": "Rob",
        "comments": [
            { "text": "Amazing!", "commentedBy": "Stardust", "commentAge": 4, "commenterImage": "img/people who commented/image (4).jpg" },
            { "text": "Awesome shot!", "commentedBy": "Nova", "commentAge": 3, "commenterImage": "img/people who commented/image (5).jpg" },
            { "text": "You're killing it!", "commentedBy": "Whisper", "commentAge": 2, "commenterImage": "img/people who commented/image (6).jpg" }
        ],
        "likes": 5,
        "postImage": "img/posts/post (2).jpg",
        "profilePicture": "img/people profile pictures/pic (2).jpg",
        "userStatus": "Chasing dreams and making memories!",
        "namesOfUsersWhoLikedThePost": ["Eclipse", "Stardust", "Nova", "Whisper", "Luna"],
        "hoursOld": 12
    },
    {
        "userName": "Tom und Anna",
        "comments": [
            { "text": "Fantastic!", "commentedBy": "Sunshine", "commentAge": 6, "commenterImage": "img/people who commented/image (7).jpg" },
            { "text": "Incredible work!", "commentedBy": "Breeze", "commentAge": 4, "commenterImage": "img/people who commented/image (8).jpg" },
            { "text": "You never disappoint!", "commentedBy": "NatureLover", "commentAge": 2, "commenterImage": "img/people who commented/image (9).jpg" }
        ],
        "likes": 8,
        "postImage": "img/posts/post (3).jpg",
        "profilePicture": "img/people profile pictures/pic (3).jpg",
        "userStatus": "Embracing the beauty of nature!",
        "namesOfUsersWhoLikedThePost": ["Sunshine", "Breeze", "NatureLover", "Adventurer", "Wanderlust"],
        "hoursOld": 18
    },
    {
        "userName": "Birgit",
        "comments": [
            { "text": "This is stunning!", "commentedBy": "InspireMe", "commentAge": 8, "commenterImage": "img/people who commented/image (10).jpg" },
            { "text": "Absolutely love it!", "commentedBy": "Dreamer", "commentAge": 6, "commenterImage": "img/people who commented/image (11).jpg" },
            { "text": "You're a talent!", "commentedBy": "Explorer", "commentAge": 4, "commenterImage": "img/people who commented/image (12).jpg" }
        ],
        "likes": 3,
        "postImage": "img/posts/post (4).jpg",
        "profilePicture": "img/people profile pictures/pic (4).jpg",
        "userStatus": "Exploring new horizons!",
        "namesOfUsersWhoLikedThePost": ["InspireMe", "Dreamer", "Explorer"],
        "hoursOld": 24
    }
]





/**
 * Populates the page with user data.
 */
function populatePageWithData() {
    let container = document.getElementById("all-user-posts-and-pictures");
    container.innerHTML = "";

    for (let i = 0; i < usersData.length; i++) {
        let user = usersData[i];

        // Create a container div for each user
        let userContainerDiv = document.createElement("div");

        // User-picture-and-name
        let userDiv = `
        <div class="user-picture-and-name">
          <p>${user.userName}</p>
          <img
            class="user-photo-on-status"
            src="${user.profilePicture}"
            alt="User Profile"
          >
        </div>
      `;

        // Post-container-with-additional-buttons-and-comments
        let postContainerDiv = `
        <div class="picture-container">
          <img class="pointer-finger" onclick="show(${i})" src="${user.postImage}" alt="${user.userName}'s Post">
        </div>
      `;

        // Buttons-container
        let buttonsContainerDiv = `
        <div class="buttons-container">
          <div class="icons-container">
            <img src="img/icons/herz.png" alt="Like Button">
            <img src="img/icons/comment icon.png" alt="Comment Section">
            <img
              src="img/icons/arrow.png"
              class="arrow-button"
              alt="Arrow Button"
            >
          </div>
          <div class="favorite-container">
            <img src="img/icons/favorite icon blank.png" alt="Favorite Icon">
          </div>
        </div>
      `;

        // Likes
        let likesDiv = `
        <div class="likes">
          Liked by <b>${user.namesOfUsersWhoLikedThePost.slice(0, 3).join(", ")}</b>
          ${user.namesOfUsersWhoLikedThePost.length > 3 ? " and" : ""}
          ${
            user.namesOfUsersWhoLikedThePost.length > 3
              ? `<b>${user.namesOfUsersWhoLikedThePost.length - 3} others</b>`
              : ""
          }
        </div>
      `;
  
      // Status
      let statusDiv = `
        <div class="status">
          <p><b>${user.userName}</b></p>
          <p>${user.userStatus}</p>
        </div>
      `;
  
      // View all comments
      let viewAllCommentsDiv = `
        <div>
          <p class="pointer-finger" onclick="show(${i})">View all comments</p>
        </div>
      `;
  
      // Input for new comments
      let commentInput = `
        <input type="text" name="comment" placeholder="Add a comment...">
        <button onclick="addComment(${i})">OK</button>
      `;
  
      // Set the innerHTML of userContainerDiv
      userContainerDiv.innerHTML =
        userDiv +
        postContainerDiv +
        buttonsContainerDiv +
        likesDiv +
        statusDiv +
        viewAllCommentsDiv +
        commentInput;
  
      // Append the user container div to the main container
      container.appendChild(userContainerDiv);
    }
  }
  
  
  /**
   * Displays user stories.
   */
  function showUserStories() {
    let userStoriesAndUserPicture = document.getElementById("stories");
    userStoriesAndUserPicture.innerHTML = "";
  
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

function closeDialog() {
    let postsInFullScreen = document.getElementById("postsInFullScreen");
    postsInFullScreen.classList.add("d-none");
}


function show(i) {
  // Display the full-screen post
  let postsInFullScreen = document.getElementById("postsInFullScreen");
  postsInFullScreen.classList.remove("d-none");

  // Get the user data based on the index
  let matchingUser = usersData[i];

  // Set the source of the userImageBigMode element
  let userImageBigMode = document.getElementById("userImageBigMode");
  userImageBigMode.src = matchingUser.postImage;

  // Retrieve matching comments
  let matchingComments = matchingUser.comments;

  // Retrieve user name
  let userName = matchingUser.userName;

  // Retrieve user status
  let userStatus = matchingUser.userStatus;

  let commentSection = document.getElementById("commentSection");
  commentSection.innerHTML = `
  <img onclick="closeDialog()" id="closeButton" class="close-button pointer-finger" src="img/icons/close button.png" alt="close button">

      <div class="picture-and-text-post-of-the-user">
          <img id="peopleSmallPicture" class="people-small-profile-images pointer-finger" src="${matchingUser.profilePicture}" alt="User profile picture">
          <b id="userNameInPreviewMode" class="pointer-finger">${userName}</b>
          <span id="userPostInPreviewMode" class="user-post">${userStatus}</span>
          <img id="heartImageInPreviewMode" class="heart-image-white" src="img/icons/herz.png" alt="">
      </div>

      <div class="reply-to-user-text">
          <span class="reply-text">${matchingUser.hoursOld}h</span>
          <span class="reply-text">${matchingUser.likes} likes</span>
          <span class="reply-text reply-tiny-text">Reply</span>
      </div>

      <div id="commentList" class="user-comments">
          ${matchingComments.map((comment) => `
          <div class="user-picture-and-comment">

          <img class="people-small-profile-images pointer-finger" src="${comment.commenterImage}" alt="Commenter Picture">
          <b class="pointer-finger">${comment.commentedBy}</b>:<span>${comment.text}</span>
          <img id="heartImageInPreviewMode" class="heart-image-white" src="img/icons/herz.png" alt="">

          </div>
          <div class="tiny-text-under-the-comment">
          <span>${comment.commentAge}h</span>
          <span class="reply-tiny-text">Reply</span>
          </div>
         
          
             
          `).join("")}
      </div>
  `;
}


  


// Add event listener to each post image
let postImages = document.querySelectorAll(".picture-container img");
postImages.forEach(function(image) {
    image.addEventListener("click", show);
});
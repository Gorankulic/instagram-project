/**
 * Rendert die Story-Bilder und ihre Namen darunter.
 */
function renderStories() {
    const storiesContainer = document.createElement('div');
    storiesContainer.classList.add('stories');

    // Definiere die Liste der Bildquellen und entsprechenden Namen.
    const images = [
        { src: '/img/people profile pictures/pic (2).jpg', name: 'Name 2' },
        { src: '/img/people profile pictures/pic (1).jpg', name: 'Name 1' },
        { src: '/img/people profile pictures/pic (3).jpg', name: 'Name 3' },
        { src: '/img/people profile pictures/pic (4).jpg', name: 'Name 4' },
    ];

    // Iteriere durch die Liste der Bilder und erstelle die Bild- und Namen-Elemente.
    for (const image of images) {
        const imgElement = document.createElement('img');
        imgElement.classList.add('story-picture');
        imgElement.src = image.src;
        imgElement.alt = '';

        const nameElement = document.createElement('p');
        nameElement.classList.add('story-name');
        nameElement.textContent = image.name;

        const container = document.createElement('div');
        container.appendChild(imgElement);
        container.appendChild(nameElement);

        storiesContainer.appendChild(container);
    }

    // Füge den Stories-Container zum Body der Seite hinzu.
    document.body.appendChild(storiesContainer);
}

/**
 * Liste von Beiträgen mit Bildern, Namen und Kommentaren.
 * @type {Array}
 */
let posts = [{
        src: '/img/posts/post (1).jpg',
        name: 'Name 1',
        likes: 0,
        comments: [],
    },
    {
        src: '/img/posts/post (2).jpg',
        name: 'Name 2',
        likes: 0,
        comments: [],
    },
    {
        src: '/img/posts/post (3).jpg',
        name: 'Name 3',
        likes: 0,
        comments: [],
    },
    {
        src: '/img/posts/post (4).jpg',
        name: 'Name 4',
        likes: 0,
        comments: [],
    },
];

/**
 * Rendert die Beiträge vertikal von oben nach unten im DOM.
 */
function renderPosts() {
    const container = document.getElementById('posts');
    container.innerHTML = '';

    posts.forEach((post, index) => {
        const element = createPostElement(post);

        container.appendChild(element);
    });
}

/**
 * Erstellt das Element für einen einzelnen Beitrag.
 * @param {Object} post - Der Beitrag.
 * @returns {HTMLElement} - Das erstellte Element.
 */
function createPostElement(post) {
    const element = document.createElement('div');
    element.classList.add('post');

    const image = new Image();
    image.src = post.src;
    image.alt = post.name;
    image.width = '200';
    image.height = '200';

    const name = document.createElement('h3');
    name.textContent = post.name;

    const likeCount = document.createElement('p');
    likeCount.textContent = `Likes: ${post.likes}`;
    likeCount.classList.add('like-count');

    const commentSection = createCommentSection(post.comments);

    const likeButton = createLikeButton(post);

    element.appendChild(image);
    element.appendChild(name);
    element.appendChild(likeCount);
    element.appendChild(commentSection);
    element.appendChild(likeButton);

    return element;
}

/**
 * Erstellt den Kommentarbereich für einen Beitrag.
 * @param {Array} comments - Die Kommentare des Beitrags.
 * @returns {HTMLElement} - Das erstellte Element.
 */
function createCommentSection(comments) {
    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');

    const commentsList = document.createElement('ul');
    commentsList.classList.add('comments-list');

    comments.forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment;
        commentsList.appendChild(commentItem);
    });

    commentSection.appendChild(commentsList);

    const addCommentForm = createCommentForm();

    commentSection.appendChild(addCommentForm);

    return commentSection;
}

/**
 * Erstellt das Formular zum Hinzufügen eines Kommentars.
 * @returns {HTMLElement} - Das erstellte Formular.
 */
function createCommentForm() {
    const addCommentForm = document.createElement('form');
    addCommentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentInput = addCommentForm.querySelector('input');
        const comment = commentInput.value;
        if (comment.trim() !== '') {
            const postIndex = Array.from(addCommentForm.closest('.post').parentNode.children).indexOf(addCommentForm.closest('.post'));
            posts[postIndex].comments.push(comment);
            renderPosts();
            savePostsToLocalStorage();
        }
        commentInput.value = '';
    });

    const commentInput = document.createElement('input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Einen Kommentar hinzufügen...');
    addCommentForm.appendChild(commentInput);

    const addCommentButton = document.createElement('button');
    addCommentButton.textContent = 'Hinzufügen';
    addCommentForm.appendChild(addCommentButton);

    return addCommentForm;
}

/**
 * Erstellt den "Like"-Button für einen Beitrag.
 * @param {Object} post - Der Beitrag.
 * @returns {HTMLElement} - Das erstellte Element.
 */
function createLikeButton(post) {
    const likeButton = document.createElement('button');
    likeButton.innerHTML = `<i class="fas fa-heart"></i> Like (${post.likes})`;
    likeButton.addEventListener('click', () => {
        post.likes++;
        renderPosts();
        savePostsToLocalStorage();
    });

    return likeButton;
}

/**
 * Speichert die Beiträge im Local Storage.
 */
function savePostsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

/**
 * Lädt die Beiträge aus dem Local Storage, sofern verfügbar.
 */
function loadPostsFromLocalStorage() {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
        posts = JSON.parse(savedPosts);
        renderPosts();
    }
}

renderStories();
renderPosts();
loadPostsFromLocalStorage();
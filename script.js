/**
 * Rendert die Story-Bilder und ihre Namen darunter.
 */
function renderStories() {
    const storiesContainer = document.createElement('div');
    storiesContainer.classList.add('stories');

    // Definiere die Liste der Bildquellen und generiere zufällige Namen.
    const images = generateRandomImages();

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
let posts = generateRandomPosts();

/**
 * Rendert die Beiträge vertikal von oben nach unten im DOM.
 */
function renderPosts() {
    const container = document.getElementById('posts');
    container.innerHTML = '';

    posts.forEach((post, index) => {
        const element = createPostElement(post, index);

        container.appendChild(element);
    });
}

/**
 * Erstellt das Element für einen einzelnen Beitrag.
 * @param {Object} post - Der Beitrag.
 * @param {number} index - Der Index des Beitrags.
 * @returns {HTMLElement} - Das erstellte Element.
 */
function createPostElement(post, index) {
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

    const commentSection = createCommentSection(post.comments, index);

    const likeButton = createLikeButton(post, index);

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
 * @param {number} postIndex - Der Index des Beitrags.
 * @returns {HTMLElement} - Das erstellte Element.
 */
function createCommentSection(comments, postIndex) {
    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');

    const commentsList = document.createElement('ul');
    commentsList.classList.add('comments-list');

    comments.forEach((comment, commentIndex) => {
        const commentItem = createCommentItem(comment, commentIndex, postIndex);
        commentsList.appendChild(commentItem);
    });

    commentSection.appendChild(commentsList);

    const addCommentForm = createCommentForm(postIndex);

    commentSection.appendChild(addCommentForm);

    return commentSection;
}

/**
 * Erstellt das Formular zum Hinzufügen eines Kommentars.
 * @param {number} postIndex - Der Index des Beitrags.
 * @returns {HTMLElement} - Das erstellte Formular.
 */
function createCommentForm(postIndex) {
    const addCommentForm = document.createElement('form');
    addCommentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentInput = addCommentForm.querySelector('input');
        const comment = commentInput.value;
        if (comment.trim() !== '') {
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
 * Erstellt ein einzelnes Kommentar-Element.
 * @param {string} comment - Der Kommentarinhalt.
 * @param {number} commentIndex - Der Index des Kommentars.
 * @param {number} postIndex - Der Index des Beitrags.
 * @returns {HTMLElement} - Das erstellte Element.
 */
function createCommentItem(comment, commentIndex, postIndex) {
    const commentItem = document.createElement('li');
    commentItem.textContent = comment;

    const editButton = document.createElement('button');
    editButton.textContent = 'Bearbeiten';
    editButton.addEventListener('click', () => {
        editComment(commentIndex, postIndex, commentItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.addEventListener('click', () => {
        deleteComment(commentIndex, postIndex, commentItem);
    });

    commentItem.appendChild(editButton);
    commentItem.appendChild(deleteButton);

    return commentItem;
}

/**
 * Bearbeitet einen Kommentar.
 * @param {number} commentIndex - Der Index des Kommentars.
 * @param {number} postIndex - Der Index des Beitrags.
 * @param {HTMLElement} commentItem - Das Kommentar-Element.
 */
function editComment(commentIndex, postIndex, commentItem) {
    const commentText = posts[postIndex].comments[commentIndex];
    const editedText = prompt('Kommentar bearbeiten:', commentText);

    if (editedText !== null) {
        posts[postIndex].comments[commentIndex] = editedText;
        commentItem.textContent = editedText;
        savePostsToLocalStorage();
    }
}

/**
 * Löscht einen Kommentar.
 * @param {number} commentIndex - Der Index des Kommentars.
 * @param {number} postIndex - Der Index des Beitrags.
 * @param {HTMLElement} commentItem - Das Kommentar-Element.
 */
function deleteComment(commentIndex, postIndex, commentItem) {
    posts[postIndex].comments.splice(commentIndex, 1);
    commentItem.remove();
    savePostsToLocalStorage();
}

/**
 * Erstellt den "Like"-Button für einen Beitrag.
 * @param {Object} post - Der Beitrag.
 * @param {number} postIndex - Der Index des Beitrags.
 * @returns {HTMLElement} - Das erstellte Element.
 */
function createLikeButton(post, postIndex) {
    const likeButton = document.createElement('button');
    likeButton.innerHTML = `<i class="fas fa-heart"></i> Like (${post.likes})`;
    likeButton.addEventListener('click', () => {
        if (likeButton.classList.contains('liked')) {
            post.likes--;
            likeButton.classList.remove('liked');
        } else {
            post.likes++;
            likeButton.classList.add('liked');
        }
        renderPosts();
        savePostsToLocalStorage();
    });

    // Überprüfen, ob der Beitrag bereits geliked wurde
    if (post.likes > 0) {
        likeButton.classList.add('liked');
    }

    return likeButton;
}

/**
 * Generiert einen zufälligen Namen.
 * @returns {string} - Der generierte Name.
 */
function generateRandomName() {
    const names = ['Max', 'Lena', 'Tim', 'Anna', 'Felix', 'Sarah', 'Paul', 'Laura', 'David', 'Julia'];
    return names[Math.floor(Math.random() * names.length)];
}

/**
 * Generiert eine Liste von zufälligen Bildern mit zugehörigen Namen.
 * @returns {Array} - Die generierten Bilder.
 */
function generateRandomImages() {
    const images = [
        { src: '/img/people profile pictures/pic (2).jpg', name: generateRandomName() },
        { src: '/img/people profile pictures/pic (1).jpg', name: generateRandomName() },
        { src: '/img/people profile pictures/pic (3).jpg', name: generateRandomName() },
        { src: '/img/people profile pictures/pic (4).jpg', name: generateRandomName() },
    ];

    return images;
}

/**
 * Generiert eine Liste von zufälligen Beiträgen.
 * @returns {Array} - Die generierten Beiträge.
 */
function generateRandomPosts() {
    const posts = [];

    const images = generateRandomImages();

    images.forEach((image) => {
        const post = {
            src: image.src,
            name: image.name,
            likes: 0,
            comments: [],
        };
        posts.push(post);
    });

    return posts;
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
/**
 * Renders the story pictures and names under them.
 */
function renderStories() {
    const storiesContainer = document.createElement('div');
    storiesContainer.classList.add('stories');

    // Define the list of image sources and corresponding names.
    const images = [
        { src: '/img/people profile pictures/pic (2).jpg', name: 'Name 2' },
        { src: '/img/people profile pictures/pic (1).jpg', name: 'Name 1' },
        { src: '/img/people profile pictures/pic (3).jpg', name: 'Name 3' },
        { src: '/img/people profile pictures/pic (4).jpg', name: 'Name 4' },
    ];

    // Loop through the list of images and create the image and name elements.
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

    // Add the stories container to the body of the page.
    document.body.appendChild(storiesContainer);
}

// Render the stories when the page loads.
window.onload = renderStories;
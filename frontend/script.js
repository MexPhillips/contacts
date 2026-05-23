async function apiFetch(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
}

const apiBaseUrl =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.protocol === 'file:'
    ? 'http://localhost:3000'
    : '';

const getData = async () => {
  try {
    const data = await apiFetch(`${apiBaseUrl}/professional`);
    displayAllData(data);
  } catch (error) {
    console.error('API fetch failed:', error);
    document.getElementById('professionalName').textContent = 'Phillip Kaluba';
    document.getElementById('contactText').textContent =
      'Could not load profile data. Start the server and refresh.';
  }
};

function displayAllData(data) {
  displayProfessionalName(data.professionalName);
  displayImage(data.base64Image);
  displayPrimaryDescription(data);
  displayWorkDescription(data);
  displayLinkTitleText(data);
  displayLinkedInLink(data);
  displayGitHubLink(data);
  displayContactText(data);
}

function displayProfessionalName(n) {
  document.getElementById('professionalName').textContent = n;
  document.title = n;
}

function displayImage(img) {
  const image = document.getElementById('professionalImage');
  if (img) {
    image.src = `data:image/png;base64,${img}`;
    image.alt = `${document.getElementById('professionalName').textContent || 'Profile'} photo`;
  }
}

function displayPrimaryDescription(data) {
  const nameLink = document.getElementById('nameLink');
  nameLink.textContent = data.nameLink.firstName;
  nameLink.href = data.nameLink.url;

  document.getElementById('primaryDescription').textContent = data.primaryDescription;
}

function displayWorkDescription(data) {
  document.getElementById('workDescription1').textContent = data.workDescription1;
  document.getElementById('workDescription2').textContent = data.workDescription2;
}

function displayLinkTitleText(data) {
  document.getElementById('linkTitleText').textContent = data.linkTitleText;
}

function displayLinkedInLink(data) {
  const linkedInLink = document.getElementById('linkedInLink');
  linkedInLink.href = data.linkedInLink.link;
  linkedInLink.querySelector('.social-label').textContent = data.linkedInLink.text;
}

function displayGitHubLink(data) {
  const githubLink = document.getElementById('githubLink');
  githubLink.href = data.githubLink.link;
  githubLink.querySelector('.social-label').textContent = data.githubLink.text;
}

function displayContactText(data) {
  document.getElementById('contactText').textContent = data.contactText || '';
}

getData();

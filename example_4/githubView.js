class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, result => {
        console.log(result);
        this.display(result);
      });
    });
  }

  display(repoData) {
    const name = document.querySelector('#repo-name');
    const description = document.querySelector('#repo-description');
    const image = document.querySelector('#profile-picture')

    name.textContent = repoData.name;
    description.textContent = repoData.description;
    image.setAttribute('src', `${repoData.organization.avatar_url}`);

  };

}

module.exports = GithubView;
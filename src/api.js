const baseAPI = '/api';

const projectService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/projects`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(project) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/project`, {
        method: 'PUT',
        body: JSON.stringify(project),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default projectService;

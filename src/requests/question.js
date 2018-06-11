import { BASE_URL } from '../config';

export default {
  all() {
    return fetch(`${BASE_URL}/questions`,
    {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    }
  ).then((response) => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`,
              {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
              }
          ).then(response => response.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(params)
      }
    ).then(response => response.json())
  }
}

export const getTasks = async (token) => {
  const headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const url = 'https://wedev-api.sky.pro/api/kanban';
  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error: ${response.status}`);
  }

  const data = await response.json();
  return data.tasks || data || [];
};

export const createTask = async (taskData, token) => {
  const headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const url = 'https://wedev-api.sky.pro/api/kanban';
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error: ${response.status}`);
  }

  return await response.json();
};

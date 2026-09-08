export const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = {
    ...options.headers,
  };

  if (headers['Content-Type']) {
    delete headers['Content-Type'];
  }
  if (headers['content-type']) {
    delete headers['content-type'];
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`https://wedev-api.sky.pro/api/kanban{endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || errorData.message || `Error: ${response.status}`);
  }

  return await response.json();
};

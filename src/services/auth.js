export const loginUser = async ({ login, password }) => {
  const url = 'https://' + 'wedev-api.sky.pro/api/user/login';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ login, password }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error: ${response.status}`);
  }

  const data = await response.json();
  if (data?.user?.token) {
    localStorage.setItem('token', data.user.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  return data;
};

export const registerUser = async ({ login, name, password }) => {
  const url = 'https://' + 'wedev-api.sky.pro/api/user';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ login, name, password }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error: ${response.status}`);
  }

  const data = await response.json();
  if (data?.user?.token) {
    localStorage.setItem('token', data.user.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  return data;
};

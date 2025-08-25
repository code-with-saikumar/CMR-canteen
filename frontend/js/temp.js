const token = localStorage.getItem('adminToken');

const response = await fetch('https://cmr-canteen-vkth.onrender.com/:4000/protected-endpoint', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

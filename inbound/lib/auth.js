export const registerUser = async (dataSend) => {
    const res = await fetch('../api/register.js',{
        method: "POST",
        header: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dataSend),
      
    });
    const data = await res.json();

    return data;
  };
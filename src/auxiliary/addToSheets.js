const addToSheets = async (value, url, resetValue) => {
  try {
    const response = await fetch(`${url}?tabId=Sheet1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([value]),
    });
    await response.json();
    resetValue();
  } catch (err) {
    console.log(err);
  }
};

export default addToSheets;

const Albums = albums => {
  const albumData = albums.albums.data;
  console.log(albumData);

  function toArray(obj) {
    const result = [];
    for (const prop in obj) {
      const value = obj[prop];
      if (typeof value === 'object') {
        result.push(toArray(value)); // <- recursive call
      } else {
        result.push(value);
      }
    }
    console.log(result);
  }
  toArray(albumData);

  return [];
};

export default Albums;

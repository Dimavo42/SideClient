const getAboutDetails = async (req, res) => {
  console.log('about');

  const developers = [
    {
      firstname: 'dima',
      lastname: 'voronov',
      id: 321241119,
      email: 'dimaiscool95@gmail.com',
    },
    {
      firstname: 'ronen',
      lastname: 'vishnivetsky',
      id: 318552007,
      email: 'ronenvish@gmail.com',
    },
  ];

  res.json(developers);
};

module.exports = { getAboutDetails };

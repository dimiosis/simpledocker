exports.helloWorld = (req, res) => {
  const message="<font color='blue'>Hello from Dmitriy!</font><br><b>App Version 1.1</b>";
  res.status(200).send(message);
};

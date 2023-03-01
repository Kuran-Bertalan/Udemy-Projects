export default function handler(req, res) {
  const email = req.body.email;
  const name = req.body.name;
  const comment = req.body.comment;
  res.status(200).json({ email: email, name: name, comment: comment });
}

module.exports = {
  getUserShoes: (req,res) => {
    const db = req.app.get('db');
    const { user_id } = req.body
    db.getUserShoes([user_id]).then( response => {
      res.status(200).send(response)
    })
  }
}
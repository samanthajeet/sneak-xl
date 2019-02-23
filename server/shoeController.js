module.exports = {
  getUserShoes: (req,res) => {
    const db = req.app.get('db');
    const { user_id } = req.body
    db.getUserShoes([user_id]).then( response => {
      res.status(200).send(response)
    })
  },

  addShoe: (req, res) => {
    const db = req.app.get('db')
    console.log('adding')
    const {brand, name, release_year, color, purchase_cost, img_url, user_id} = req.body

    db.addShoe([brand, name, release_year, color, purchase_cost, img_url, user_id]).then( response => {
      res.status(200).send(response)
    })
  },

  deleteShoe: (req, res) => {
    const db = req.app.get('db')
    const { id, user_id } = req.body
    db.deleteShoe([id, user_id]).then( response => {
      res.status(200).send(response)
    })
  }
}


module.exports = {
  login: (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body
    
    db.getUser([username, password]).then( (users) => {
      const user = users[0]
    

      if( user ) {
        req.session.user = user
        res.status(200).send( {
          user: req.session.user,
          authenticated: true
        })
      } else {
        res.status(401).send({
          user: {},
          authenticated: false
        })
      }
    } )
  },

  isLoggedIn: ( req, res ) => {
    if( req.session.user ){
      res.status(200).send({
        user: req.session.user,
        authenticated: true
      })
    } else {
      res.status(200).send({
        user: {},
        authenticated: false
      })
    }
  
  }
}
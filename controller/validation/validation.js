const { check, validationResult } = require('express-validator');

module.exports.check = [

  check('name')
    .not()
    .isEmpty()
    .withMessage('password field is required'),

    check('email')
    .not()
    .isEmpty()
    .withMessage('email field is required'),
    check('phone_number')
    .not()
    .isEmpty()
    .withMessage('phone number field is required'),

  check('password')

    // To delete leading and triling space 
    .trim()

    // Validate minimum length of password 
    // Optional for this context 
    .isLength({ min: 4, max: 16 })

    // Custom message 
    .withMessage('Password must be between 4 to 16 characters')

    
    
]

module.exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash("errormsg", errors.mapped()) 
    
  } else {
    next()
  }

}
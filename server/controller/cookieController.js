const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  //skip if login was unsucessful
  if (res.locals.userExists == false) return next();
  res.locals.userNameCookie = res.cookie(
    'userName',
    res.locals.userObject.userName
  );
  res.locals.secretCookie = res.cookie(
    'secret',
    Math.floor(Math.random() * 100)
  );
  // console.log('1 ',res.locals.userNameCookie)
  // console.log('2 ',res.locals.secretCookie)
  console.log('already set cookies');
  return next();
};

//set ID of the cookie
cookieController.setCookieSSID = (req, res, next) => {
  //skip if login was unsucessful
  if (res.locals.userExists == false) return next();
  //grab id from the _id in userOBject
  const id = res.locals.userObject._id;
  //pass this into the next middleware
  res.locals.SSIDCookie = res.cookie('ssid', id, { httpOnly: true });
  // console.log('already set SSID Cookie inside middleware to res.locals.SSIDCookie', res.locals.SSIDCookie )
  next();
};

module.exports = cookieController;

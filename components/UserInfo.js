export default class UserInfo {
  /* Take an object with the selectors of two elements into the
  constructor: one for the profile’s name element and one for its
  job element. */
  constructor({ name, description }) {
    this._profileTitle = document.querySelector(name);
    this._profileDescription = document.querySelector(description);
  }

  getUserInfo() {
    /* returns an object
containing information about the user. This method will be handy for
cases when it's necessary to display the user data in the open form. */
    return {
      name: this._profileTitle.textContent,
      description: this._profileDescription.textContent,
    };
  }

  setUserInfo(newData) {
    /* takes new user data
and adds it to the page. This method should be used after successful
submission of the profile form.

 */
    /* takes information from inputs and sets it as the text content
for the profile title and profile description */
    this._profileTitle.textContent = newData.name;
    this._profileDescription.textContent = newData.description;
  }
}
/* The UserInfo class is responsible for rendering information about
the user on the page. This class should:

Take an object with the selectors of two elements into the
constructor: one for the profile’s name element and one for its job
element.

Have a public method named getUserInfo(), which returns an object
containing information about the user. This method will be handy for
cases when it's necessary to display the user data in the open form.

Have a public method named setUserInfo(), which takes new user data
and adds it to the page. This method should be used after successful
submission of the profile form.

Create an instance of the UserInfo class in index.js and use its
methods as described. */

"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgroup_capstone"] = self["webpackChunkgroup_capstone"] || []).push([["main"],{

/***/ "./src/Modules/comments.js":
/*!*********************************!*\
  !*** ./src/Modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewApp\": () => (/* binding */ createNewApp),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"setComment\": () => (/* binding */ setComment)\n/* harmony export */ });\n// involvement API requests\n\n// create new app\n\nconst createNewApp = async () => {\n  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json'\n    }\n  });\n  return res.text();\n};\n\n// set comments\nconst setComment = async (appId, itemId, name, comment) => {\n  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      item_id: itemId,\n      username: name,\n      comment\n    })\n  });\n  return res;\n};\n\n// get comments\nconst getComments = async (appId, itemId) => {\n  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`);\n  const comments = await res.json();\n  return comments;\n};\n\n//# sourceURL=webpack://group-capstone/./src/Modules/comments.js?");

/***/ }),

/***/ "./src/Modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/Modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = comments => comments.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://group-capstone/./src/Modules/commentsCounter.js?");

/***/ }),

/***/ "./src/Modules/counter.js":
/*!********************************!*\
  !*** ./src/Modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = () => {\n  const items = document.querySelectorAll('.meal');\n  return items.length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://group-capstone/./src/Modules/counter.js?");

/***/ }),

/***/ "./src/Modules/popup.js":
/*!******************************!*\
  !*** ./src/Modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/Modules/comments.js\");\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/Modules/commentsCounter.js\");\n\n\nclass Popup {\n  constructor(id) {\n    this.id = id;\n    this.meals = document.querySelector('.meals');\n    this.new_app = 'cjyAZrT5FmLTc23d82ob';\n  }\n  initEvents = async () => {\n    await this.display();\n    const commentBtn = document.querySelector('#comment-btn');\n    const name = document.querySelector('#name');\n    const comment = document.querySelector('#comment');\n    const fetchedComments = document.querySelector('.fetched-comments-list');\n    const commentsTitle = document.querySelector('.fetched-comments-heading');\n    const message = document.querySelector('.no-comments-message');\n    commentBtn.addEventListener('click', () => {\n      this.setComment(this.id, name.value, comment.value);\n      if (message) {\n        fetchedComments.removeChild(message);\n        message.remove();\n      }\n      fetchedComments.innerHTML += `<li class=\"fetched-comment\"><span id=\"comment-name\">${name.value}:</span> <span>${comment.value}</span></li>`;\n      const commentsArray = [...fetchedComments.querySelectorAll('li')];\n      commentsTitle.innerText = `Comments (${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentsArray)})`;\n      name.value = '';\n      comment.value = '';\n    });\n  };\n  display = async () => {\n    // api request\n    const meal = await this.getMealData(this.id);\n    const comments = await this.getComments(this.id);\n\n    // elements\n    const popupWindow = document.createElement('section');\n    const closeContainer = document.createElement('div');\n    const closePopup = document.createElement('img');\n    const mealSection = document.createElement('div');\n    const commentsSection = document.createElement('div');\n    const mealImage = document.createElement('div');\n    const mealName = document.createElement('h3');\n    const instructionsTitle = document.createElement('h4');\n    const mealInstructions = document.createElement('p');\n    const commentTitle = document.createElement('h4');\n    const commentForm = document.createElement('form');\n    const name = document.createElement('input');\n    const comment = document.createElement('textarea');\n    const commentBtn = document.createElement('input');\n    const fetchedCommentsTitle = document.createElement('h4');\n    const commentsList = document.createElement('div');\n    const fetchedComments = document.createElement('ul');\n\n    // attributes\n    popupWindow.className = 'popup';\n    closeContainer.className = 'close-container';\n    closePopup.className = 'close';\n    closePopup.src = 'https://img.icons8.com/ios/30/null/delete-sign--v1.png';\n    mealSection.className = 'meal-info';\n    commentsSection.className = 'comments';\n    mealImage.className = 'meal-img';\n    mealImage.style.backgroundImage = `url(${meal.strMealThumb})`;\n    mealName.className = 'meal-name';\n    mealName.innerText = meal.strMeal;\n    instructionsTitle.className = 'instructions-heading';\n    instructionsTitle.innerText = 'Instructions';\n    mealInstructions.className = 'meal-instructions';\n    mealInstructions.innerText = meal.strInstructions;\n    commentTitle.class = 'comment-heading';\n    commentTitle.innerText = 'Add a comment';\n    commentForm.id = 'comment-form';\n    name.id = 'name';\n    name.type = 'text';\n    name.name = 'name';\n    name.placeholder = 'Your name:';\n    comment.id = 'comment';\n    comment.placeholder = 'Your insights:';\n    commentBtn.type = 'submit';\n    commentBtn.id = 'comment-btn';\n    commentBtn.innerText = 'Comment';\n    fetchedCommentsTitle.className = 'fetched-comments-heading';\n    commentsList.className = 'comments-list';\n    fetchedComments.className = 'fetched-comments-list';\n    if (comments.length > 0) {\n      comments.forEach(comment => {\n        fetchedComments.innerHTML += `<li class=\"fetched-comment\"><span id=\"comment-name\">${comment.username}:</span> <span>${comment.comment}</span></li>`;\n      });\n      const commentsArray = [...fetchedComments.querySelectorAll('li')];\n      fetchedCommentsTitle.innerText = `Comments (${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentsArray)})`;\n    } else {\n      fetchedComments.innerHTML += '<span class=\"no-comments-message\">No comments yet</span>';\n    }\n\n    // DOM structure\n    mealSection.appendChild(mealImage);\n    mealSection.appendChild(mealName);\n    mealSection.appendChild(instructionsTitle);\n    mealSection.appendChild(mealInstructions);\n    commentForm.appendChild(name);\n    commentForm.appendChild(comment);\n    commentForm.appendChild(commentBtn);\n    commentsSection.appendChild(commentTitle);\n    commentsSection.appendChild(commentForm);\n    commentsSection.appendChild(fetchedCommentsTitle);\n    commentsList.appendChild(fetchedComments);\n    commentsSection.appendChild(commentsList);\n    closeContainer.appendChild(closePopup);\n    popupWindow.appendChild(closeContainer);\n    popupWindow.appendChild(mealSection);\n    popupWindow.appendChild(commentsSection);\n    this.meals.append(popupWindow);\n    document.body.style.overflowY = 'hidden';\n    document.body.style.background = 'rgba(0,0,0,0.1)';\n\n    // events\n    commentForm.addEventListener('submit', e => {\n      e.preventDefault();\n    });\n    closePopup.addEventListener('click', () => {\n      popupWindow.remove();\n      document.body.style.overflowY = 'scroll';\n      document.body.style.background = '#fff';\n    });\n  };\n  getMealData = async id => {\n    // get by id from home page\n    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);\n    const mealData = await res.json();\n    const meal = mealData.meals[0];\n    return meal;\n  };\n  getComments = async id => {\n    const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(this.new_app, Number(id));\n    return comments;\n  };\n  setComment = async (id, nameValue, commentValue) => {\n    await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.setComment)(this.new_app, id, nameValue, commentValue);\n  };\n  getCommentCount = () => (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n//# sourceURL=webpack://group-capstone/./src/Modules/popup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/counter.js */ \"./src/Modules/counter.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/popup.js */ \"./src/Modules/popup.js\");\n\n\n\nconst mealsSec = document.querySelector('.meals');\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R8PkkxCkNQPQdCTMeNzH/likes/';\n\n// display Meals\nconst displayMeal = data => {\n  mealsSec.innerHTML += data.meals.map(meal => `\n  <div class=\"meal\">\n    <img src=\"${meal.strMealThumb}\" alt=\"\">\n    <h2>${meal.strMeal}</h2>\n    <div class=\"likes\">\n      <button class=\"btn-like\" id=\"${meal.idMeal}\">Like</button>\n      <p class=\"likes-count\" id=\"${meal.idMeal}\"></>\n    </div>\n    <button class=\"btn-cmt\" id=\"${meal.idMeal}\">Comments</button>\n    \n  </div>`);\n};\n\n// Fetch the mealdb Api\nconst get = async () => {\n  const respons = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');\n  const data = await respons.json();\n  displayMeal(data);\n};\nget();\n\n// get the comments Id\ndocument.addEventListener('click', e => {\n  if (e.target.className === 'btn-cmt') {\n    const mealId = e.target.id;\n    const popup = new _Modules_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](mealId);\n    popup.initEvents();\n  }\n});\n\n// Poste request likes\nconst postReqLikes = async id => {\n  const postRequest = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      item_id: id\n    })\n  };\n  await fetch(url, postRequest).then(res => res.json());\n};\n\n// display likes\n\nconst displayLikes = data => {\n  const likeCount = document.querySelectorAll('.likes-count');\n  likeCount.forEach(element => {\n    data.forEach(resp => {\n      if (element.id === resp.item_id) {\n        element.textContent = `${resp.likes} likes`;\n      }\n    });\n  });\n};\ndocument.addEventListener('click', async e => {\n  e.preventDefault();\n  if (e.target.className === 'btn-like') {\n    const {\n      id\n    } = e.target;\n    postReqLikes(id);\n  }\n  await fetch(url).then(res => res.json()).then(data => displayLikes(data));\n});\nwindow.addEventListener('load', () => {\n  fetch(url).then(res => res.json()).then(data => displayLikes(data));\n});\ndocument.addEventListener('click', () => {\n  fetch(url).then(res => res.json()).then(data => displayLikes(data));\n});\n\n// Show the number of items in the page.\nwindow.addEventListener('load', () => {\n  mealsSec.lastChild.innerHTML += `<div> Pages 1 : ${(0,_Modules_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()} Items.</div>`;\n});\n\n//# sourceURL=webpack://group-capstone/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  border-width: 0;\\n  border-style: solid;\\n  border-color: currentColor;\\n  text-decoration: none;\\n  list-style: none;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  font-family: 'Inter', sans-serif;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nheader {\\n  width: 85%;\\n  margin: auto;\\n}\\n\\nnav {\\n  padding: 1rem 3rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.logo img {\\n  height: 120px;\\n  width: 210px;\\n}\\n\\nheader ul {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\nul li {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 103px;\\n  height: 48px;\\n  font-size: 22px;\\n  font-weight: 600;\\n  cursor: pointer;\\n}\\n\\nul li:hover {\\n  background: #e4200e;\\n  color: #fff;\\n  cursor: pointer;\\n}\\n\\n.meals {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  margin: auto;\\n  width: 80%;\\n}\\n\\n.meal {\\n  width: 300px;\\n  height: 500px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.meal img {\\n  height: 300px;\\n  width: 250px;\\n}\\n\\n.likes {\\n  display: flex;\\n  align-items: center;\\n  gap: 65px;\\n}\\n\\n.btn-like {\\n  height: 30px;\\n  font-size: 22px;\\n  font-weight: 400;\\n  border: none;\\n  background-color: #fff;\\n  cursor: pointer;\\n}\\n\\n.btn-cmt {\\n  width: 100px;\\n  height: 35px;\\n  cursor: pointer;\\n  font-size: 16px;\\n  border: none;\\n  border-radius: 5px;\\n  background: #078e07;\\n  color: #fff;\\n}\\n\\nfooter {\\n  width: 100%;\\n  height: 10vh;\\n  padding: 1rem;\\n  background-color: #e4200e63;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nmain {\\n  width: 100%;\\n  display: flex;\\n}\\n\\n.popup {\\n  margin-top: 2rem;\\n  margin-bottom: 4rem;\\n  margin-left: 2rem;\\n  padding: 4rem 0.5rem;\\n  display: flex;\\n  position: fixed;\\n  overflow-y: scroll;\\n  overflow-x: hidden;\\n  background-color: #fff;\\n  z-index: 2;\\n  left: 0;\\n  top: 0;\\n  bottom: 0;\\n  flex-direction: column;\\n  width: 90%;\\n\\n  /* height: 100vh; */\\n  align-items: center;\\n  border-radius: 30px;\\n  border: 1px solid #b4b4b4;\\n}\\n\\n.popup::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.close-container {\\n  display: flex;\\n  justify-content: flex-end;\\n  width: 100%;\\n}\\n\\n.close {\\n  padding: 10px;\\n}\\n\\n.meal-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 1rem;\\n  width: 95%;\\n}\\n\\n.meal-img {\\n  display: flex;\\n  width: 70%;\\n  height: 300px;\\n  background-position: center;\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.comments {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 1rem;\\n  width: 95%;\\n}\\n\\n.meal-name {\\n  font-size: 24px;\\n  font-weight: 800;\\n  padding: 1rem;\\n  text-align: center;\\n}\\n\\n.instructions-heading {\\n  font-size: 22px;\\n  margin-top: 1rem;\\n}\\n\\n.meal-instructions {\\n  font-size: 18px;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n@media only screen and (min-width: 1024px) {\\n  .popup {\\n    margin: 4rem;\\n    padding: 3rem 2rem;\\n  }\\n}\\n\\n@media only screen and (min-width: 1240px) {\\n  .popup {\\n    margin: 6rem;\\n    padding: 4rem 2rem;\\n  }\\n\\n  .meal-img {\\n    height: 350px;\\n  }\\n}\\n\\n@media only screen and (min-width: 1440px) {\\n  .popup {\\n    margin-top: 2rem;\\n    margin-bottom: 4rem;\\n    padding: 5rem 2rem;\\n  }\\n\\n  .meal-img {\\n    height: 400px;\\n  }\\n\\n  .meal-name {\\n    font-size: 26px;\\n  }\\n\\n  .meal-instructions {\\n    font-size: 20px;\\n  }\\n}\\n\\n#comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem;\\n  width: 100%;\\n}\\n\\ninput[type=text] {\\n  padding: 12px;\\n  width: 100%;\\n  border: 1px solid #383838;\\n  border-radius: 12px;\\n  margin: 25px 0;\\n}\\n\\ntextarea {\\n  width: 100%;\\n  height: 140px;\\n  border: 1px solid #383838;\\n  border-radius: 12px;\\n  padding: 12px;\\n}\\n\\n#comment-btn {\\n  width: 100px;\\n  height: 5vh;\\n  border-radius: 12px;\\n  padding: 10px;\\n  text-align: center;\\n  margin: 25px 0;\\n  font-size: 15px;\\n  font-weight: 500;\\n}\\n\\n@media only screen and (min-width: 790px) {\\n  #comment-form {\\n    width: 95%;\\n    align-items: center;\\n  }\\n\\n  input[type=text] {\\n    padding: 14px;\\n    width: 600px;\\n  }\\n\\n  textarea {\\n    width: 600px;\\n    height: 180px;\\n  }\\n}\\n\\n@media only screen and (min-width: 1190px) {\\n  input[type=text] {\\n    padding: 14px;\\n    width: 700px;\\n  }\\n\\n  textarea {\\n    width: 700px;\\n    height: 200px;\\n  }\\n\\n  #comment-btn {\\n    width: 120px;\\n    height: 6vh;\\n    font-size: 18px;\\n  }\\n}\\n\\n.comments-list {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  width: 100%;\\n}\\n\\n.fetched-comments-list {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: left;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.fetched-comment {\\n  font-size: 16px;\\n  text-align: left;\\n  font-weight: 400;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  gap: 20px;\\n  padding: 1rem;\\n  justify-content: flex-start;\\n}\\n\\n#comment-name {\\n  font-weight: 600;\\n}\\n\\n.no-comments-message {\\n  font-weight: 600;\\n  font-style: italic;\\n  padding: 15px;\\n}\\n\\n@media only screen and (min-width: 790px) {\\n  .no-comments-message {\\n    padding: 45px;\\n  }\\n}\\n\\n@media only screen and (min-width: 1190px) {\\n  .no-comments-message {\\n    padding: 65px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
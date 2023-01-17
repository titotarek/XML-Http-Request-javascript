// First way for make XMLHttpRequest with Get method

// let request = new XMLHttpRequest();

// request.open("GET", "https://jsonplaceholder.typicode.com/posts");
// // request.responseType = "json"
// request.send();
// console.log(request);
// request.onload = function () {
// 	if (request.readyState === 4 && request.status === 200) {
// 		console.log(typeof this.responseText);
// 		let jsObj = JSON.parse(this.responseText);
// 		// console.log( typeof jsObj)
// 		for (let i = 0; i < jsObj.length; i++) {
// 			let div = document.createElement("div");
// 			let title = document.createElement("h1");
// 			let tit = document.createTextNode(jsObj[i].title);
// 			title.appendChild(tit);
// 			div.appendChild(title);
// 			document.body.append(div);
// 		}
// 	}
// };

// second way for make XMLHttpRequest with Get method

//  GET  XMLHttpRequest
function readPost() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/posts");
	request.responseType = "json";
	request.send();
	request.onload = function () {
		if (request.status >= 200 && request.status < 300) {
			let posts = request.response;
			for (post of posts) {
				// console.log(post);
				document.getElementById("title").innerHTML += `<h1>${post.title}</h1>`;
			}
		} else {
			alert("error");
		}
	};
}
readPost();

//  create New POST  Request with XMLHttpRequest

function createNewPost() {
	let request = new XMLHttpRequest();
	request.open("POST", "https://jsonplaceholder.typicode.com/posts");
	request.responseType = "json";
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("Content-type", "application/json");
	let bodyParams = `
    {
        "title":"Hello Vue",
        "body": "I Love Programming",
        "userId": 101
        
      }`;
	request.send(bodyParams);
	request.onload = function () {
		if (request.status >= 200 && request.status < 300) {
			let response = request.response;
			console.log(response);
			console.log(request.status);
			console.log(" the user get add to the list");
		} else {
			console.log("request fall");
		}
	};
}
createNewPost();

//  Updating user Post

function putUserPost() {
	let request = new XMLHttpRequest();
	request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
	request.responseType = "json";
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("Content-type", "application/json");
	let bodyParams = `
    {
        "title":"Hello Vue3",
        "body": "I Love Programming and JavaScript",
        "userId": 1
      }`;
	request.send(bodyParams);
	request.onload = function () {
		if (request.status >= 200 && request.status < 300) {
			let response = request.response;
			console.log("#".repeat(30));
			console.log(response);
			console.log(request.status);
			console.log("the user has  update successful");
		} else {
			console.log("request fall");
		}
	};
}
putUserPost();

// create patch request to update the title only in the bodyParams
function patchUserPost() {
	let request = new XMLHttpRequest();
	request.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1");
	request.responseType = "json";
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("Content-type", "application/json");
	let bodyParams = `
    {
        "title":"Hello ReactJs"
      }`;
	request.send(bodyParams);
	request.onload = function () {
		if (request.status >= 200 && request.status < 300) {
			let response = request.response;
			console.log("#".repeat(30));
			console.log(response);
			console.log(request.status);
			console.log("the user has  patch  successful");
		} else {
			console.log("request fall");
		}
	};
}
patchUserPost();

// deleting user
function deleteUserPost() {
	let request = new XMLHttpRequest();
	request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
	request.responseType = "json";
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("Content-type", "application/json");

	request.send();
	request.onload = function () {
		if (request.status >= 200 && request.status < 300) {
			let response = request.response;
			console.log("#".repeat(30));
			console.log(response);
			console.log(request.status);
			console.log("the user has delete successful");
		} else {
			console.log("request fall");
		}
	};
}

deleteUserPost();


// get Post With Quarry Filter  user
function getPostWithQuarryFilter() {
	let request = new XMLHttpRequest();
	request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1");
	request.responseType = "json";
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("Content-type", "application/json");

	request.send();
	request.onload = function () {
		if (request.status >= 200 && request.status < 300) {
			let posts = request.response;
			for(post of posts){
				document.getElementById('title').innerHTML += `<h1>${post.title}</h1>` 
			}
		
			console.log(request.status);
			console.log("the get Post With Quarry Filter is successful");
		} else {
			console.log("request fall");
		}
	};
}

getPostWithQuarryFilter();

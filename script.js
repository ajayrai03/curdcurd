function onFormSubmit(event){
    event.preventDefault();
    const title=event.target.title.value;
    const url=event.target.url.value;
    showOnScreen(title,url);
    // console.log(title);
    // console.log(url);
}
function showOnScreen(title,url){
const parentElem=document.getElementById('addedBookmarks');
const childElem=document.createElement('li');
childElem.textContent=title+" > "+url;
const deleteBtn=document.createElement('input');
deleteBtn.type="button";
deleteBtn.value="Delete";
const editBtn=document.createElement('input');
editBtn.type="button";
editBtn.value="Edit";

childElem.appendChild(deleteBtn);
childElem.appendChild(editBtn);
parentElem.appendChild(childElem);


}
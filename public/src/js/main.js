
//DRAG AND DROP: para hacer elementos que sean arrastrables
function miOnDrag(event) {
    console.log('Arrastrando elemento',event.target);
}

function miOnDragStart(e) {
    e.dataTransfer.setData('id',e.target.id);
    console.log('Drag Start',e.target.id, ' = ',e.dataTransfer.getData('id'));
}
function miOnDragEnter(e) {
    console.log('Drag Enter');
}
function miOnDragLeave(e) {
    console.log('Drag Leave');
}
function miOnDragOver(e) {
    e.preventDefault();
    console.log('Drag Over');
}
function miOnDragEnd(e) {
    console.log('Drag End');
}
function miOnDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData('id');
    e.target.appendChild(document.getElementById(data));
    console.log('Drop',data);
}
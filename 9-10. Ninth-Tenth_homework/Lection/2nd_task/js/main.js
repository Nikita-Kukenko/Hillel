function renderObject() {
    for(var key in this) {
        if(typeof(this[key]) !== 'function') {
            document.write('<br>' + key + ': ' + this[key] + '<br>');
        }
    }
}

var obj = {
    name: 'Nikita',
    lastName: 'Kukenko',
    renderObject: renderObject,
}

obj.renderObject();
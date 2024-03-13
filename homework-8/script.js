
/////////Homework-1/////////////////
var arr = [
    {id: 1, name: 'Fozil'},
    {id: 1, name: 'Odil'},
    {id: 1, name: 'Alibek'},
    {id: 1, name: 'Elyor'}
];

function onSearch(text) {
    text = text.toLowerCase();
    var searchResult = arr.filter(function(item) {
        var itemName = item.name.toLowerCase();
        return itemName.includes(text);
    });

    return searchResult;
}
console.log(onSearch('o'));

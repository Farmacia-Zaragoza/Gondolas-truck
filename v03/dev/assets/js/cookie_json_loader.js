//console.log('connected');
var cookie_content = document.querySelector('.cookie_content');
//get JSON link
// var j_link = document.getElementById('policyData').getAttribute('data');
// //console.log(j_link);

// var j_linkTest = document.getElementById('policyData').getAttribute('data');
// console.log(j_linkTest);

//Get JSON Data
async function getPolicyData() {
    var j_link = document.getElementById('policyData').getAttribute('data');
    console.log(j_link);
    var dataResponse = await fetch(j_link);
    var jsonData = await dataResponse.json();
    return jsonData;
}

//Show Data
getPolicyData().then(function(dataContent) {
    //console.log(dataContent);
    //var num = [1,2,3];
    var keys = Object.keys(dataContent),
    len = keys.length,
    i = 0,
    prop,
    value;
    while (i < len) {
        prop = keys[i];
        value = dataContent[prop];
        //console.log(value);
        var sectionEle = document.createElement('section');
        value.forEach(function(data) {
            if(data['html-type'] !== 'a') {
                //console.log(data['html-type']);
                sectionEle.innerHTML += '<'+data['html-type']+' class="fontStyleClass">'+ data.item +'<'+data['html-type']+'>';
            }
            // sectionEle.innerHTML += '<'+data['html-type']+' class="fontStyleClass">'+ data.content +'<'+data['html-type']+'>';
            if(data['html-type'] === 'a') {
                //console.log(data['html-type']);
                sectionEle.innerHTML += '<'+data['html-type']+' href="'+ data.clink +'"'+' class="fontStyleClass" style="margin-left:10px">'+ data.item +'<'+data['html-type']+'>';
            }
        });
        cookie_content.appendChild(sectionEle);
        i += 1;
    }
});

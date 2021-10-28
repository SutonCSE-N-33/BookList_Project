const element = document.querySelector('.parent');
const repeatItem = document.querySelector('.repeat-item')
const bookName = document.querySelector('.bookName');
const code = document.querySelector('.code');
const writerName = document.querySelector('.writerName');
const other = document.querySelector('.other');
const addMore = document.querySelector('.add_more');
const add = document.querySelector('.active');
const close = document.querySelector('.close');

 let data = [];
 const ui = new UI();

addMore.addEventListener('click',function(){
    repeatItem.classList.add('show');
});

close.addEventListener('click',function(){
    repeatItem.classList.remove('show');
})

add.addEventListener('click',function(e){
        e.preventDefault();
         
        let bookValue = bookName.value;
        let codevalue = code.value;
        let writerNameValue = writerName.value;
        let otherValue = other.value;

        if(bookValue == '' || codevalue == '' || writerNameValue == '' || otherValue == ''){
            console.log("")
        }else{
            const dataList =  new DataList(bookValue, codevalue, writerNameValue, otherValue);
            data.push(dataList);
            ui.addList(element, dataList);
            ui.clearFields(bookName, code, writerName, other);
        }
})


function UI(){
    UI.prototype.addList = function(element, dataList){
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `<div class="row">
        <div class="col-3">
            <div class="inner_repeat border_right">
                <h4>${dataList.bookValue}</h4>
            </div>
        </div>
        <div class="col-3">
            <div class="inner_repeat border_right">
                <h4>${dataList.codevalue}</h4>
            </div>
        </div>
        <div class="col-3">
            <div class="inner_repeat border_right">
                <h4>${dataList.writerNameValue}</h4>
            </div>
        </div>
        <div class="col-3">
            <div class="inner_repeat">
                <h4>${dataList.otherValue}</h4>
            </div>
        </div>
    </div>`;
       element.appendChild(div);
    }

    UI.prototype.clearFields = function(bookName, code, writerName, other){
        bookName.value = ''; 
        code.value = '';
        writerName.value = '';
        other.value = '';
    }
}



function DataList(bookValue, codevalue, writerNameValue, otherValue){
    this.bookValue = bookValue;
    this.codevalue = codevalue;
    this.writerNameValue = writerNameValue;
    this.otherValue = otherValue;

}
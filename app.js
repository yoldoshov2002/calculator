function insert(num) {
    document.form.TextView.value = document.form.TextView.value + num
}
function del() {
    document.form.TextView.value = ``
}
function c() {
    var x = document.form.TextView.value
    document.form.TextView.value = x.substring(0,x.length-1)
}
function equal() {
    var x = document.form.TextView.value
    if(x==""){
        alert('Iltimos son kiriting')
    }
    if(x){
        document.form.TextView.value = eval(x)
    }
}
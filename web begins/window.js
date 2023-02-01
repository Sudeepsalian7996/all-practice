this.table="hey buddy"
function tryed(){
    console.log(`${this.table}`)
}
tryed.call(this)

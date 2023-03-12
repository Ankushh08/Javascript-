(() => {
    Array.prototype.myFiler = function(logic) {
        let resultingArray = [];
        console.log(this)
        for (let i = 0; i < this.length; i++) {
            if (logic(this[i])) {
                resultingArray.push(this[i]);
            }
        }

        return resultingArray;
    }


    let arr = [1, 2, 3, 4];

    const logicFn = (num) => {
        return num > 2;
    }
    arr.myFiler(logicFn)

    console.log(arr.myFiler(logicFn));
})();
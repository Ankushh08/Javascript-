// implement eval.add(10).subtract(5)

const obj = {
    total: 0,

    add(a) {
        this.total += a;
        // returning this, so that we can chain methods. 
        return this;
    },

    subtract(b) {
        this.total -= b;
        return this;
    }
}

const res = obj.subtract(100).add(10).add(5).subtract(9);
console.log(res.total);
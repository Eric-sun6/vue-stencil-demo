const strategies = {
  isEmpty(value, errMsg) {
    if (!value) {
      return errMsg;
    }
  },
  validatorEmail(value, errMsg) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      return errMsg;
    }
  },
  newRegexStrategy(regex){
    const isRegexFlag = Object.prototype.toString.call(regex);
    if(!isRegexFlag){
      throw new Error('please inport a regex object');
    }

  }
};
class Validator {
  constructor() {
    this.cache = [];
  }
  add(rules=[]) {
    // console.log(rules)
    rules.forEach(rule =>{
      console.log(rules.strategy)
    })
    // rules.forEach((rule) => {
    //   // todolist 这块方法要重新写了
      
    //   // const args_arr = rule.strategy.split(":");
    //   // this.cache.push(() => {
    //   //   const handler = args_arr.shift();
    //   //   args_arr.unshift(regex);
    //   //   args_arr.push(rule.errMsg);
    //   //   return strategies[handler].apply(regex, args_arr);
    //   // });
    // });
  }
  creatStrategy(regex, errMsg=''){

  }
  start() {
    let errmsg = [];
    for (let i = 0; i < this.cache.length; i++) {
      const err = this.cache[i]();
      if (err) {
        errmsg.push(err);
      }
    }
    return errmsg;
  }
}
export default Validator;

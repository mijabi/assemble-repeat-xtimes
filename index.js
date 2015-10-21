module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper("assemble-repeat-xtimes", function(index_count, mod, block) {
    if(parseInt(index_count) % (mod) === 0){
      return block.fn(this);
    }
  });
};

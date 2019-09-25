'use strict';


module.exports = (req,res,next) => {
  if(next){
    throw new Error;
  }
};
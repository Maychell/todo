/**
 * Todo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    message: {
        type: 'string',
        required: true
    },

    priority: {
    	type: 'integer',
    	required: true
    }
    
  }

};

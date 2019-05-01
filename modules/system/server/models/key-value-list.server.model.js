'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var KeyValueListSchema = new Schema({
  key : {
    type: String,
    trim: true,
    required: true
  },
  values : {
    type: [{ type: String, trim: true }],
    default: []
  },
  sorted : {
    type: Boolean,
    default: true
  },
  updated : {
    type: Date,
    default: Date.now()
  }
});

KeyValueListSchema.pre('save', function (next) {
  this.updated = Date.now();
  if (this.sorted){
    this.values.sort();
  }
  next();
});

mongoose.model('KeyValueList', KeyValueListSchema);

const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const EventSchema = mongoose.Schema({
  widgetId: ObjectId,
  value: Number,
}, {
  timestamps: { createdAt: true, updatedAt: false },
  versionKey: false,
});

module.exports = mongoose.model('Event', EventSchema);
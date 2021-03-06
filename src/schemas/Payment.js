module.exports = function(mongoose) {
  const Schema = mongoose.Schema;

  const Payment = new Schema({
    user_id : { type: Schema.Types.ObjectId, ref : 'User'},
    challenge_id: { type: Schema.Types.ObjectId, ref : 'Challenge'},
    user_challenge_id : { type: Schema.Types.ObjectId, ref : 'UserChallenge'},
    date : Date,
    amount : Number
  });

  Payment.pre('save', function(next) {
    this.date = new Date()
    next()
  });
  // Payment.post('save', function (next) {
    
  // })

  return mongoose.model('Payment', Payment)
};
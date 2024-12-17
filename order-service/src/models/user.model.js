import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: String, 
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    sex: {
        type: String,
        // required: true,
    }
},
{
    timestamp: true,
}
);
User.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all',
});

export default mongoose.model('User', User);



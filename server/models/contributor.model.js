import mongoose from "mongoose";
 
const {Schema , model} = mongoose;
const contributorSchema = new Schema(
    {
      user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        role: {
            type: String,
            required: false,
            enum: ['Developer', 'Tester', 'Maintainer'],
            default:'Maintainer'
    
        },

        projects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project'
          }],


});

export default model ("contributor",contributorSchema);
const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            
            useUnifiedTopology: true,
            useNewUrlParser: true
        })


        console.log('MongoDB connected')
    
        
    } catch (err) {
       console.log(`Error: ${err.message}`)
    }
}

module.exports = dbConnect;


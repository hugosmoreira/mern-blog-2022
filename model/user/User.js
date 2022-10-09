const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        required: [true, 'Please enter your first name'],
        type: String,
    },
    lastName: {
        required: [true, 'Please enter your last name'],
        type: String,
    },
    profilePhoto: {
        type: String,
    },
    email: {
        required: [true, 'Please enter your email'],
        type: String,
    },
    bio: {
        type: String,
    },
    password: {
        required: [true, 'Please enter your password'],
        type: String,
    },
    postCount: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum:['Admin', 'Guest', 'Blogger'],
    },
    isFollowing: {
        type: Boolean,
        default: false,
    },
    isUnfollowing: {
        type: Boolean,
        default: false,
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    accountVerificationToken: {
        type: String,
    },
    accountVerificationTokenExpires: {
        type: Date,
    },
    viewedBy: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    followers: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    following: {
        type: [ 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    passwordChangedAt: {
        type: Date,
    },
    passwordResetToken: {
        type: String,
    },
    passwordResetTokenExpires: {
        type: Date,
    },
    active: {
        type: Boolean,
        default: false,
    }
},{
    tiJSON: {virtuals: true},
    toObject: {virtuals: true},
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;
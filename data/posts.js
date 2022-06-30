import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://source.unsplash.com/random',
        user: USERS[0].user,
        likes: 7870, 
        caption: 'This is great',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'talktome',
                comment: 'Wow, this is pretty cool'
            },
            {
                user: 'talktome',
                comment: 'Wow, this is pretty cool'
            }
        ]
    },
    {
        imageUrl: 'https://source.unsplash.com/random',
        user: USERS[1].user,
        likes: 7870,
        caption: 'This is great',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'talktome',
                comment: 'Wow, this is pretty cool'
            }
        ]
    },
    {
        imageUrl: 'https://source.unsplash.com/random',
        user: USERS[2].user,
        likes: 7870,
        caption: 'This is great',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'talktome',
                comment: 'Wow, this is pretty cool'
            }
        ]
    },
    {
        imageUrl: 'https://source.unsplash.com/random',
        user: USERS[3].user,
        likes: 7870,
        caption: 'This is great',
        profile_picture: USERS[3].image,
        comments: [
            {
                user: 'talktome',
                comment: 'Wow, this is pretty cool'
            }
        ]
    }
]
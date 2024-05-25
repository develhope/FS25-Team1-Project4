import React from 'react';

export default function UserAvatar({ username = 'login', img = './assets/imgAvatarDefault.jpeg' }) {
    return (
        <div id="user-avatar" className="fixed top-4 right-4 flex items-center gap-3">
            <div className="h-10 w-10">
                <img className="h-full w-full rounded-full object-cover object-center ring ring-white" src={img} alt="" />
            </div>
            <div>
                <div className="text-sm font-medium text-secondary-500">{username}</div>
            </div>
        </div>
    );
}

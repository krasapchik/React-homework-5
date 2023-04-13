

export function User({userInfo, getUser}){

    return(
        <div className="app">
        <div className="user">
            {userInfo.id}
            <span>{userInfo.name}</span>
            <button onClick={() => getUser(userInfo.id)}>more info</button>
        </div>
</div>
    )
}
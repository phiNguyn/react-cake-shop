import StorageKeys from "../../constants/storage-keys"

const CheckLogin = () => {
    const isLoggedIn = localStorage.getItem(StorageKeys.USER)
    if(isLoggedIn) {
        return JSON.parse(isLoggedIn)
    }
    return false
}

export default CheckLogin
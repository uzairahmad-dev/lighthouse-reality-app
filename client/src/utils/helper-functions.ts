import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

export const uploadAvatar = async (image: File) => {
    if(!image) {
        return;
    }

    const imageRef = ref(storage, `realtors/${image.name + v4()}`);
    return uploadBytes(imageRef, image).then((snapshot) => {
        const imageURL = getDownloadURL(snapshot.ref).then(url => {
            return url
        });
        return imageURL
    });
}
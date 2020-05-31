const toJSON = response => response.json()

export async function uploadImage(file, url: string) {
    try {
        const formData = new FormData()

        formData.append('file', file)

        formData.append('upload_preset', 'ownemployed-webapp')

        const options = {
            method: 'POST',
            body: formData,
        }

        return await fetch(url, options).then(toJSON)
    } catch (err) {
        // TOOD Handle error
        console.error(err)
    }
}

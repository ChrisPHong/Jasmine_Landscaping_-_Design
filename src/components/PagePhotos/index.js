import SinglePhoto from "../SinglePhoto"


const PagePhotos = ({ photos, page }) => {
    // console.log(photos, "<<<< ph[t")
    return (
        <>

            {photos.map((photo, idx) => {

                return (
                    <div key={idx}>

                        <SinglePhoto photo={photo} />

                    </div>
                )
            })}

        </>
    )
}


export default PagePhotos;

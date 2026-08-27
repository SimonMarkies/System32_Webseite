import "./mediagallery.css";

const picArray: string[] = [
    "/public/Screenshot1.jpg",
    "/public/Screenshot2.jpg",
    "/public/Screenshot3.jpg",
    "/public/Screenshot4.jpg",
    "/public/Screenshot6.jpg",
];

export default function Mediagallery() {
    return (
        <section id="mediaGalleryID" className="mediagallery">
            <h1>Media Gallery</h1>

            <div className="mediagallery-grid">
                {picArray.map((pic, index) => (
                    <img
                        key={index}
                        src={pic}
                        alt={`Screenshot ${index + 1}`}
                        className="mediagallery-image"
                    />
                ))}
            </div>
        </section>
    );
}
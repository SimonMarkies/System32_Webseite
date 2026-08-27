import "./mediagallery.css";

const picArray: string[] = [
    "Screenshot1.jpg",
    "Screenshot2.jpg",
    "Screenshot3.jpg",
    "Screenshot4.jpg",
    "Screenshot6.jpg",
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
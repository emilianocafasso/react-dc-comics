export default function ComicCard({ comic }) {
    return (
        <div className="comic-card">
            <img
                src={comic.thumb}
                alt={comic.title}
                width={150}
                height={150}
                className="comic-image"
            />
            <p className="mt-2 text-center text-white text-uppercase comic-title">
                {comic.title}
            </p>
        </div>
    )
}
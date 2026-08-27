import './header.css'
import { useActiveSection } from './ActiveSection'
import headSpinGif from './assets/Sys32HeadSpin.gif'

const headerSections: { label: string; id: string }[] = [
    { label: "System32", id: "system32ID" },
    { label: "Description", id: "descriptionID" },
    { label: "Mediagallery", id: "mediaGalleryID" },
    { label: "About Us", id: "aboutUsID" },
]

const SCROLL_IDS = headerSections.map((s) => s.id)

export default function Header() {
    const activeId = useActiveSection(SCROLL_IDS)

    return (
        <header className="header">
            <nav>
                {headerSections.map((section) => (
                    <section key={section.id}>
                        {activeId === section.id && (
                            <img src={headSpinGif} alt="Head spinning of Mainchar" />
                        )}
                        <h2 className={activeId === section.id ? 'sectionchoosen' : ''}>
                            <a href={`#${section.id}`}>{section.label}</a>
                        </h2>
                    </section>
                ))}
            </nav>
        </header>
    )
}
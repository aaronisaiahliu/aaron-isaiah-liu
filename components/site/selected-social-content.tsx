import posts from "@/content/social-content.json";
import ArrowIcon from "./arrow-icon";

export default function SelectedSocialContent() {
  return (
    <section className="selected-content wrap" aria-labelledby="selected-content-title">
      <header className="selected-content-heading">
        <p className="eyebrow">04 / CONTENT</p>
        <h2 id="selected-content-title">Selected Social Media Content</h2>
        <p>Reels, posts &amp; campaigns</p>
      </header>
      <div className="selected-content-grid">
        {posts.map((post) => (
          <a className="selected-content-item" key={post.id} href={post.href}
            target="_blank" rel="noopener noreferrer"
            aria-label={`View ${post.label} — ${post.platform} selection ${post.id} (opens in a new tab)`}>
            <div className="selected-content-media" style={{ aspectRatio: `${post.width} / ${post.height}` }}>
              {post.image && <img src={post.image} alt={`Video preview from ${post.label}`}
                width={post.width} height={post.height} loading="lazy" decoding="async" />}
              <span className="selected-content-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="m9 5 11 7-11 7Z" /></svg>
              </span>
            </div>
            <div className="selected-content-caption">
              <span className="selected-content-number">{post.id}</span>
              <span>{post.platform}</span>
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

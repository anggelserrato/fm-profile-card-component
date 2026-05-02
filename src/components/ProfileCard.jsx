import imageVictor from '../assets/image-victor.jpg';

function ProfileCard() {
  return (
    <main>
      <article>
        <header>
          <img src={imageVictor} alt="Profile picture of Victor Crest" />
          <h1>
            Victor Crest <span>26</span>
          </h1>
          <p>London</p>
        </header>

        <footer>
          <ul>
            <li>
              <strong>80K</strong>
              <span>Followers</span>
            </li>
            <li>
              <strong>803K</strong>
              <span>Likes</span>
            </li>
            <li>
              <strong>1.4K</strong>
              <span>Photos</span>
            </li>
          </ul>
        </footer>
      </article>
    </main>
  );
}

export default ProfileCard;

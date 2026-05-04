import imageVictor from '../assets/image-victor.jpg';
import patternCard from '../assets/bg-pattern-card.svg';

const PROFILE_STATS = [
  {
    value: '80K',
    label: 'Followers',
  },
  {
    value: '803K',
    label: 'Likes',
  },
  {
    value: '1.4K',
    label: 'Photos',
  },
];

function ProfileCard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <article className="flex w-[90%] max-w-[350px] flex-col items-center gap-300 overflow-hidden rounded-[15px] bg-white pb-300">
        <div className="w-full">
          <div className="h-[140px] w-full">
            <img
              src={patternCard}
              alt="Background pattern card"
              className="h-full w-full object-cover"
            />
          </div>
          <header className="flex flex-col items-center gap-200">
            <img
              src={imageVictor}
              alt="Profile picture of Victor Crest"
              className="mt-[-48px] h-[96px] w-[96px] rounded-full border-[5px] border-white"
            />
            <div className="flex flex-col gap-100">
              <h1 className="text-preset-1-bold text-navy-950">
                Victor Crest{' '}
                <span className="text-preset-1-regular text-gray-500">26</span>
              </h1>
              <p className="text-preset-2 text-gray-500">London</p>
            </div>
          </header>
        </div>

        <hr className="w-full border border-gray-100" />

        <footer>
          <ul className="flex flex-row items-center justify-center gap-700">
            {PROFILE_STATS.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col items-center justify-center gap-100"
              >
                <strong className="text-preset-1-bold text-navy-950">
                  {stat.value}
                </strong>
                <span className="text-preset-3 text-gray-500">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </main>
  );
}

export default ProfileCard;
